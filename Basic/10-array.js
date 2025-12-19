/*
====================================================
ARRAYS EN JAVASCRIPT
====================================================

Un array permite almacenar múltiples valores dentro
de una sola variable. Los valores pueden ser de
cualquier tipo de dato y no tienen que ser homogéneos.
*/

// ==================================================
// Declaración de arrays
// ==================================================

let myArray = []               // Forma literal (recomendada)
let myArray2 = new Array()     // Usando el constructor Array

console.log(myArray)
console.log(myArray2)

// ==================================================
// Inicialización de arrays
// ==================================================

// Array con un solo elemento
myArray = [1]
myArray2 = new Array(3) // Crea un array con 3 posiciones vacías

console.log(myArray)
console.log(myArray2)

// Array con múltiples valores
myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

// Arrays pueden contener distintos tipos de datos
myArray = ["Lamk", "Sinester", 24, true]
myArray2 = new Array("Lamk", "Sinester", 24, true)

console.log(myArray)
console.log(myArray2)

// ==================================================
// Asignación manual de valores por índice
// ==================================================

myArray2 = new Array(3)
myArray2[0] = "Lamk"
myArray2[1] = "Sinester"
myArray2[2] = 24

console.log(myArray2)

// Los arrays pueden tener posiciones vacías
myArray2 = new Array(3)
myArray2[0] = "Lamk"
// myArray2[1] queda sin definir
myArray2[2] = 24
myArray2[4] = true // Se salta el índice 3

console.log(myArray2)

// El tamaño del array se ajusta automáticamente
myArray = []
myArray[0] = "Lamk"
myArray[2] = 24

console.log(myArray)

// ==================================================
// Métodos comunes de arrays
// ==================================================

myArray = []

// --------------------------------------------------
// push() y pop()
// --------------------------------------------------
// push(): agrega uno o más elementos al final
// pop(): elimina y retorna el último elemento

myArray.push("Lamk")
myArray.push("Sinester")
myArray.push(24)
myArray.push(true)

console.log(myArray)

console.log(myArray.pop()) // Retorna el último elemento
myArray.pop()              // Elimina otro elemento

console.log(myArray)


// --------------------------------------------------
// shift() y unshift()
// --------------------------------------------------
// shift(): elimina el primer elemento
// unshift(): agrega uno o más elementos al inicio

myArray.shift()
console.log(myArray)

myArray.unshift("Lamk", "lamkdev")
console.log(myArray)


// --------------------------------------------------
// length
// --------------------------------------------------
// Devuelve la cantidad de elementos del array

console.log(myArray.length)


// --------------------------------------------------
// Vaciar un array
// --------------------------------------------------

myArray = []        // Forma más común
myArray.length = 0 // Alternativa

console.log(myArray)


// ==================================================
// slice()
// ==================================================
// Crea un nuevo array a partir de una porción del array original
// No modifica el array original

myArray = ["Lamk", "Sinester", 24, true]

let myNewArray = myArray.slice(1, 2)

console.log(myArray)
console.log(myNewArray)


// ==================================================
// splice()
// ==================================================
// Modifica el array original
// Puede eliminar, reemplazar o agregar elementos

// Eliminar elementos
myArray.splice(1, 3)
console.log(myArray)

// Reemplazar elementos
myArray = ["Lamk", "Sinester", 24, true]
myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)