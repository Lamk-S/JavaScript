// ==================================================
// EJERCICIO 8
// Usa propagación para combinar dos objetos en uno
// nuevo
// ==================================================

// --------------------------------------------------
// Definición de los objetos
// --------------------------------------------------

let data = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S"
}

let contact = {
    email: "kunlancelot@gmail.com",
    phone: "123456789"
}

// --------------------------------------------------
// Combinación de objetos usando spread
// --------------------------------------------------

let person = {...data, ...contact}

console.log(person)