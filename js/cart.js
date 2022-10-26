const notification = (text, color, background) =>
{
    Toastify({
        text: text,
        className: "info",
        style: {
          background: background,
          color: color
        }
      }).showToast();
}

const loadEvents = (total) =>
{   
    // checkout functionality
    const btn = document.querySelector('#checkout');
    btn.addEventListener('click', ()=>{
        localStorage.removeItem('cart'); // remove cart
        // location.reload(true); // reload page
        if(total > 0)
        {
            const message = 'Compra finalizada, su total es de $' + total;
            notification(message, "#012639", "#85CAC8");
            setTimeout(() => {
                window.location.href = "index.html"; // reditect to index
            }, 4000);
        }
        else
        {
            const message = '¡Todavía no tienes productos en el carrito!';
            notification(message, "#ffffff", "#012639");
        }
    });

    // delete item
    const deleteButtons = document.querySelectorAll('.delete-button');
    for (const button of deleteButtons)
    {   
        button.addEventListener('click', ()=>{
            const newCart = shopCart.filter(element => element.id != button.id);
            localStorage.setItem('cart', JSON.stringify(newCart)); // set new cart in storage
              notification('Producto eliminado con éxito!', "#ffffff", "#012639");
              setTimeout(() => {
                  location.reload(true); // reload page
              }, 2000);
        })
    }
}
// every time a product is added the cart is updated - interaction with HTML
const updateCart = (cart) =>
{
    let cartContainer = document.querySelector('#cart');
    // Get the child element node
    let container = document.getElementById("cartContainer");
    if(container)
    {
        container.parentNode.removeChild(container);
    }
    let div = document.createElement('div');
    div.setAttribute('id','cartContainer');
    div.innerHTML += ` <h2 class="text-primary mb-4">Carrito de compras</h2>`;
    for (const product of cart)
    {
        div.innerHTML += `
            
            <div class="card mb-5" >
              <div class="row g-0">
                <div class="col-md-4">
                    <img src="${product.image}" class="img-fluid rounded-start" width="200" height="200" alt="${product.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text"><small class="text-muted">${product.description}</small></p>
                        <p class="card-text">Cantidad: ${product.quantity} | Precio: ${product.price}</p>
                        <a class="delete-button button btn btn-secondary" id="${product.id}">Eliminar</a>
                    </div>
                </div>
              </div>
            </div>
        `;
    }
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    div.innerHTML += `
        <div class="cart-item">
            <h4>Total: $${total.toFixed(2)}</h4>
        </div>
    `;
    div.innerHTML += ` <a class="button btn btn-primary" id="checkout">Finalizar compra </a>`;
    cartContainer.appendChild(div);
    loadEvents(total);
}

const shopCart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart(shopCart);