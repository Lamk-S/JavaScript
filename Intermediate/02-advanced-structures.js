/*
==================================================
   ADVANCED STRUCTURES (Estructuras avanzadas)
==================================================
*/

// ==================================================
//                ARRAYS AVANZADOS
// ==================================================

// --------------------------------------------------
// MÉTODOS FUNCIONALES
// --------------------------------------------------

/*
Los métodos funcionales:
- NO modifican el array original (excepto casos específicos)
- Reciben funciones como argumentos
- Mejoran la legibilidad del código
*/

const numbers = [1, 2, 3, 4, 5, 6]

// ------------------------------------------
// forEach()
// ------------------------------------------
// Recorre el array elemento por elemento
// NO retorna un nuevo array

numbers.forEach(element => console.log(element))

// ------------------------------------------
// map()
// ------------------------------------------
// Transforma cada elemento del array
// Retorna un NUEVO array

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// ------------------------------------------
// filter()
// ------------------------------------------
// Filtra elementos según una condición
// Retorna un NUEVO array

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// ------------------------------------------
// reduce()
// ------------------------------------------
// Reduce todos los elementos a un solo valor
// Ideal para sumas, acumuladores y cálculos

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum)

// ==================================================
//            MANIPULACIÓN DE ARRAYS
// ==================================================

// ------------------------------------------
// flat()
// ------------------------------------------
// Aplana arrays anidados hasta el nivel indicado

const nestedArray = [1, [2, [3, [4]]]]

console.log(nestedArray)

const flatArray = nestedArray.flat(2)
console.log(flatArray)

// ------------------------------------------
// flatMap()
// ------------------------------------------
// Combina map() + flat()
// Ideal para transformar y aplanar en una sola pasada

const phrases = ["Hola mundo", "Adiós mundo"]

const words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// ==================================================
//                ORDENACIÓN
// ==================================================

// ------------------------------------------
// sort() - Strings
// ------------------------------------------
// Ordena alfabéticamente (por defecto)

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()

console.log(sorted)

// ------------------------------------------
// sort() - Números
// ------------------------------------------
// Es necesario un comparador

unsorted = [3, 4, 1, 6, 10]

sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)

// ------------------------------------------
// reverse()
// ------------------------------------------
// Invierte el orden del array (MODIFICA el array)

sorted.reverse()
console.log(sorted)

// ==================================================
//                  BÚSQUEDA
// ==================================================

// ------------------------------------------
// includes()
// ------------------------------------------
// Verifica si un valor existe en el array
// Retorna true o false

console.log(sorted.includes(4)) // true
console.log(sorted.includes(5)) // false

// ------------------------------------------
// find()
// ------------------------------------------
// Retorna el PRIMER elemento que cumpla la condición

const firstEven = sorted.find(number => number % 2 === 0)
console.log(firstEven)

// ------------------------------------------
// findIndex()
// ------------------------------------------
// Retorna el ÍNDICE del primer elemento que cumpla
// Retorna -1 si no encuentra nada

let firstEvenIndex = sorted.findIndex(number => number % 2 === 0)
console.log(firstEvenIndex)

sorted = [3, 7, 11]

firstEvenIndex = sorted.findIndex(number => number % 2 === 0)
console.log(firstEvenIndex)