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

// ==================================================
//              CLOSURES (CLAUSURAS)
// ==================================================

// Una closure ocurre cuando una función "recuerda"
// el contexto léxico donde fue creada, incluso
// después de que ese contexto haya terminado
// su ejecución.

function createCounter() {
    let counter = 0 // Variable privada
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()

// Nota clave:
// `counter` no es accesible directamente desde fuera.
// Esto permite encapsulación sin clases.

// ==================================================
//                  RECURSIVIDAD
// ==================================================

// Una función recursiva se llama a sí misma.
// Debe cumplir dos reglas:
// 1. Tener un caso base
// 2. Avanzar hacia ese caso base

num = 5

function factorial(num) {
    if (num < 0) {
        return "Valor inválido"
    }

    if (num === 0) {
        return 1
    }

    return num * factorial(num - 1)
}

console.log(factorial(num))

// ==================================================
//              FUNCIONES PARCIALES
// ==================================================

// Una función parcial fija algunos argumentos
// y devuelve una nueva función con menos parámetros.

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)

console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// ==================================================
//                    CURRYING
// ==================================================

// Transforma una función con múltiples
// argumentos en una secuencia de funciones
// con un solo argumento.

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)

console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))


// Diferencia rápida:
// - Parcial: fija algunos argumentos
// - Currying: encadena funciones de un argumento

// ==================================================
//                    CALLBACKS
// ==================================================

// Es una función que se pasa como argumento
// a otra función y se ejecuta después.

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`El resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)

processData([1, 2, 3], (result) => {
    console.log(`El resultado en el arrow function es: ${result}`)
})