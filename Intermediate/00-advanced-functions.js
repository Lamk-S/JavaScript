/*
==================================================
        ADVANCED FUNCTIONS (Funciones avanzadas)
==================================================
*/

// ==================================================
//      FUNCIONES COMO CIUDANOS DE PRIMERA CLASE
// ==================================================

// Asignar una función a una variable
const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Lamk")

// Pasar funciones como argumentos
function processGreeting(greetFunction, name) {
    greetFunction(name)
}

// Retornar una función desde otra función
function returnGreeting() {
    return greet
}

processGreeting(greet, "Sinester")

const greet2 = returnGreeting()
greet2("Lamk-S")

// ==================================================
//                ARROW FUNCTIONS
// ==================================================

// ------------------------------------------
// Retorno implícito
// ------------------------------------------
// Si el cuerpo tiene una sola expresión,
// se puede omitir la palabra 'return'

const multiply =  (a, b) => a * b
console.log(multiply(2, 5))

// ------------------------------------------
// this léxico
// ------------------------------------------
// Las arrow functions NO crean su propio `this`.
// Heredan el `this` del contexto donde se definen.

const handler = {
    name: "Lamk",
    // Función tradicional: `this` apunta al objeto
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    // Arrow function: `this` NO apunta al objeto
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`) // undefined
    }
}

handler.greeting()
handler.arrowGreeting();

// Nota rápida:
// Arrow functions NO deben usarse como métodos
// cuando necesitas acceder al `this` del objeto.

// ==================================================
//   IIFE (Immediately Invoked Function Expression)
// ==================================================

// ------------------------------------------
// IIFE clásico
// ------------------------------------------
// Se ejecuta inmediatamente después de definirse
// Útil para aislar variables y evitar contaminación
// del scope global

(function() {
    console.log("IIFE clásico")
})();

// ------------------------------------------
// IIFE con arrow function
// ------------------------------------------

(() => {
    console.log("IIFE con arrow function")
})();

// ==================================================
//                PARÁMETRO REST (...)
// ==================================================

// Permite recibir una cantidad indefinida de argumentos
// Se agrupan automáticamente en un array

function sum(...numbers) {
    result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// ==================================================
//               OPERADOR SPREAD (...)
// ==================================================

// Permite "expandir" un array en argumentos individuales

const numbers = [1, 2, 3]

function sumWithSpread(a, b , c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3))        // Sin spread
console.log(sumWithSpread(...numbers))     // Con spread

// ...