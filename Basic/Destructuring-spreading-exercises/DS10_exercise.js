// ==================================================
// EJERCICIO 10
// Combina desestructuración y propagación
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------
let person = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S",
    email: "kunlancelot@gmail.com"
}

// --------------------------------------------------
// Desestructuración para separar algunas propiedades
// --------------------------------------------------
let { name, age, ...rest } = person

console.log(name)
console.log(age)
console.log(rest)

// --------------------------------------------------
// Creación de un nuevo objeto usando propagación
// --------------------------------------------------

let person2 = { name, age, ...rest, country: "Perú" }
console.log(person2) 