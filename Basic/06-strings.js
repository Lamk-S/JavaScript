// ==========================================
// STRINGS (Cadenas de texto)
// ==========================================

// Un string es una secuencia de caracteres.
// Puede definirse usando comillas dobles "", simples '' o template literals ``.

let myName = "Lamk"

// Concatenación de strings usando el operador +
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// typeof permite conocer el tipo de dato
console.log(typeof greeting) // string

// ------------------------------------------
// Propiedad length
// ------------------------------------------
// length devuelve la cantidad de caracteres del string
console.log(greeting.length)

// ------------------------------------------
// Acceso a caracteres
// ------------------------------------------
// Los strings se indexan desde la posición 0
console.log(greeting[0])  // -> H
console.log(greeting[10]) // -> ! posición [11] -> undefined

// ------------------------------------------
// Métodos comunes de strings
// ------------------------------------------

// Convierte el string a minúsculas
console.log(greeting.toLowerCase())
// Convierte el string a mayúsculas
console.log(greeting.toUpperCase())
// indexOf devuelve la posición de la primera coincidencia
// Si no encuentra el valor, devuelve -1
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Lamk"))
console.log(greeting.indexOf("Melvin"))
// includes devuelve true o false dependiendo si existe el valor
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Lamk"))
console.log(greeting.includes("Melvin"))
// slice extrae una parte del string
// slice(inicio, fin)
console.log(greeting.slice(0, 10))
// replace reemplaza una parte del string por otra
console.log(greeting.replace("Lamk", "Melvin"))

// ------------------------------------------
// Template literals (Plantillas literales)
// ------------------------------------------

// Permiten:
// - Strings multilínea
// - Interpolación de variables usando ${}

let message = `Hola, estos son mis apuntes de
JavaScript`
console.log(message)

let email = "kunlancelot@gmail.com"

// Interpolación de variables
console.log(`Hola, ${myName}! Tu email es ${email}`)