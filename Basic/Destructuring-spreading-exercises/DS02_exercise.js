// ==================================================
// EJERCICIO 2
// Usa desestructuración en un array y asigna un
// valor predeterminado a una variable
// ==================================================

// --------------------------------------------------
// Definición del array
// --------------------------------------------------

let myArray = [1, 2, 3, 4]

// --------------------------------------------------
// Desestructuración del array con valores por defecto
// --------------------------------------------------

let [value1, value2, value3, value4, value5 = 0] = myArray

console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)