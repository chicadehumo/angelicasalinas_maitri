const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const userPhone = document.querySelector("#userPhone")
const userPassword = document.querySelector("#userPassword")
const btnEnviar = document.querySelector("#btnEnviar")

function guardarDatos() {
    localStorage.setItem("nombre",userName.value) //crear una clave y almacenar un valor
    localStorage.setItem("email",userEmail.value)
    localStorage.setItem("whatsapp",userPhone.value)
    localStorage.setItem("password",userPassword.value)
}

btnEnviar.addEventListener("click",guardarDatos)

function recuperarDatos() {
    userName.value = localStorage.getItem("nombre") 
    userEmail.value = localStorage.getItem("email")
    userPhone.value = localStorage.getItem("whatsapp")
    userPassword.value = localStorage.getItem("password")
}

document.addEventListener("DOMContentLoaded", recuperarDatos)