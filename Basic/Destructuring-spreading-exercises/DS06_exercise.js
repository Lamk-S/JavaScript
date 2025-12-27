// ==================================================
// EJERCICIO 6
// Usa propagación para combinar dos arrays en uno
// nuevo
// ==================================================

// --------------------------------------------------
// Definición de los arrays
// --------------------------------------------------

let myArray = [1, 2, 3, 4, 5]
let myArray2 = [6, 7, 8, 9, 10]

// --------------------------------------------------
// Combinación de arrays usando spread
// --------------------------------------------------

let myArray3 = [...myArray, ...myArray2]

console.log(myArray3)