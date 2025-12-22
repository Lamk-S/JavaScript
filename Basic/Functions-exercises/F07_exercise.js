// ==================================================
// EJERCICIO 7
// Crea una función que reciba un array de números
// y devuelva la suma de todos los números pares
// ==================================================

let numbers = [
    3, 12, 7, 25, 8, 15, 2, 30, 11, 5,
    18, 6, 22, 1, 14, 9, 20, 4, 17, 10
]

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function addPairs(array) {
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result += array[i]
        }
    }

    return result
}

console.log("La suma de números pares (function):", addPairs(numbers))

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const addPairs2 = function (array) {
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result += array[i]
        }
    }

    return result
}

console.log("La suma de números pares (expression):", addPairs2(numbers))

// --------------------------------------------------
// Solución usando Arrow Function
// --------------------------------------------------

const addPairs3 = (array) => {
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result += array[i]
        }
    }

    return result
}

console.log("La suma de números pares (arrow):", addPairs3(numbers))

// --------------------------------------------------
// Solución usando forEach (moderna y eficiente)
// --------------------------------------------------

function addPairsForEach(array) {
    let result = 0
    
    array.forEach(function (valor) {
        if (valor % 2 == 0) {
            result += valor
        }
    })
    
    return result
}

console.log("La suma de números pares (forEach):", addPairsForEach(numbers))