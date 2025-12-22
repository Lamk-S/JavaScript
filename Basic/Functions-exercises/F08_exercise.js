// ==================================================
// EJERCICIO 8
// Crea una función que reciba un array de números y
// devuelva un nuevo array con cada número elevado
// al cuadrado
// ==================================================

let numbers = [
    3, 12, 7, 25, 8, 15, 2, 30, 11, 5,
    18, 6, 22, 1, 14, 9, 20, 4, 17, 10
]

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function squares(array) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]**2)
    }

    return newArray
}

console.log("Nuevo array (function):", squares(numbers))

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const squares2 = function (array) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]**2)
    }

    return newArray
}

console.log("Nuevo array (expression):", squares2(numbers))

// --------------------------------------------------
// Solución usando Arrow Function
// --------------------------------------------------

const squares3 = (array) => {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]**2)
    }

    return newArray
}

console.log("Nuevo array (arrow):", squares3(numbers))

// --------------------------------------------------
// Solución usando forEach
// --------------------------------------------------

function squaresForEach(array) {
    let newArray = []

    array.forEach(valor => newArray.push(valor ** 2))

    return newArray
}

console.log("Nuevo array (forEach):", squaresForEach(numbers))