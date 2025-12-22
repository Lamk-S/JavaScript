// ==================================================
// EJERCICIO 2
// Crea una función que reciba un array de números
// y devuelva el mayor de ellos
// ==================================================

let numbers = [
    3, 12, 7, 25, 8, 15, 2, 30, 11, 5,
    18, 6, 22, 1, 14, 9, 20, 4, 17, 10
]

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function largestNumber(array) {
    let mayor = array[0]

    for(let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }

    return mayor
}

console.log(`Mayor (function): ${largestNumber(numbers)}`)

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const largestNumber2 = function(array) {
    let mayor = array[0]

    for(let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }

    return mayor
}

console.log(`Mayor (expression): ${largestNumber2(numbers)}`)

// --------------------------------------------------
// Solución usando función anidada
// --------------------------------------------------

function main(array) {
    let mayor = array[0]

    function largestNumber3(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > mayor) {
                mayor = arr[i]
            }
        }
        return mayor
    }

    return largestNumber3(array)
}

console.log(`Mayor (nested): ${main(numbers)}`)

// --------------------------------------------------
// Solución usando forEach()
// --------------------------------------------------

function largestNumberForEach(array) {

    let mayor = array[0]

    array.forEach(function (valor) {
        if (valor > mayor) {
            mayor = valor
        }
    })

    return mayor
}

console.log(`Mayor (forEach): ${largestNumberForEach(numbers)}`)