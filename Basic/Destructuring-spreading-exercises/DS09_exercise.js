// ==================================================
// EJERCICIO 9
// Usa propagación para crear una copia de un objeto
// ==================================================

// --------------------------------------------------
// Definición del objeto original
// --------------------------------------------------

let person = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S"
}

// --------------------------------------------------
// Creación de una copia usando spread operator
// --------------------------------------------------

let person2 = {...person}

console.log(person2)