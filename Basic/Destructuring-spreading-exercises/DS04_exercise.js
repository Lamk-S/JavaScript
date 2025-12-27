// ==================================================
// EJERCICIO 4
// Usa desestructuración para extraer dos propiedades
// de un objeto y asígnalas a nuevas variables con
// nombres diferentes
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
// Desestructuración del objeto con cambio de nombre
// --------------------------------------------------

let {name: myName, age: myAge} = person

console.log(myName) // "Lamk"
console.log(myAge)  // 24