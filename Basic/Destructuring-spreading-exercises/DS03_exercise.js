// ==================================================
// EJERCICIO 3
// Usa desestructuración para extraer dos propiedades
// de un objeto
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

let person = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S"
}

// --------------------------------------------------
// Desestructuración del objeto
// --------------------------------------------------

let {name, age} = person

console.log(name)  // "Lamk"
console.log(age)   // 24