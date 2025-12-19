/*
====================================================
SETS EN JAVASCRIPT
====================================================

Un Set es una estructura de datos que permite almacenar
valores únicos, es decir, no admite elementos duplicados.
*/

// ==================================================
// Declaración de un Set
// ==================================================

let mySet = new Set()    // Declaración correcta de un Set vacío
let mySet2 = {}          // Esto NO es un Set, es un objeto literal

console.log(mySet)
console.log(mySet2)

// ==================================================
// Inicialización de un Set
// ==================================================

// Se puede inicializar un Set pasando un array como argumento
mySet = new Set(["Lamk", "Sinester", "lamkdev", 24, true, "kunlancelot@gmail.com"])

console.log(mySet)

// ==================================================
// Métodos comunes de Set
// ==================================================

// --------------------------------------------------
// add() → Agrega un nuevo elemento al Set
// delete() → Elimina un elemento específico del Set
// --------------------------------------------------

mySet.add("@Lamk-S")
console.log(mySet)

mySet.delete("@Lamk-S")
console.log(mySet)


// delete() devuelve true si el elemento existía
// o false si el elemento no estaba en el Set
console.log(mySet.delete("Lamk")) // true
console.log(mySet.delete(4))      // false

console.log(mySet)

// --------------------------------------------------
// has()
// --------------------------------------------------

// has() verifica si un valor existe dentro del Set
// Devuelve true o false
console.log(mySet.has("Sinester")) // true
console.log(mySet.has("Lamk"))     // false

// --------------------------------------------------
// size
// --------------------------------------------------

// size devuelve la cantidad de elementos del Set
console.log(mySet.size)

// --------------------------------------------------
// Convertir un Set a Array
// --------------------------------------------------

let myArray = Array.from(mySet)
console.log(myArray)

// --------------------------------------------------
// Convertir un Array a Set
// --------------------------------------------------

// Muy útil para eliminar duplicados de un array
mySet = new Set(myArray)
console.log(mySet)

// --------------------------------------------------
// Los Set NO admiten duplicados
// --------------------------------------------------

// Si intentamos agregar un valor duplicado, el Set lo ignora
mySet.add("kunlancelot@gmail.com")
mySet.add("kunlancelot@gmail.com") // Duplicado, no se agrega

// Los valores son sensibles a mayúsculas y minúsculas
mySet.add("Kunlancelot@gmail.com")
console.log(mySet)