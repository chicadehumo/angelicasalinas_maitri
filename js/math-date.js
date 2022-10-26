const fecha = new Date()

console.log(Date.now())          //método privado de la clase - sin instanciar
console.log(fecha.getDay())      //número de día
console.log(fecha.getDate())     // el día
console.log(fecha.getMonth())    //el mes - 1
console.log(fecha.getYear())     //el año (desde 1900)
console.log(fecha.getFullYear()) //el año completo

console.log(Math.floor(21.11))  //el entero más próximo (para abajo)
console.log(Math.ceil(21.11))  //el entero más próximo (para arriba)
console.log(Math.random())  //número random entre 0 y 1 (con decimales)
console.log(Math.max(1, 2, 6, 11, 97))  //
console.log(Math.min(18, 22, 86, 11, 97))  //