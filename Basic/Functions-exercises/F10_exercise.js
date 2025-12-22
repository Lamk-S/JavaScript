// ==================================================
// EJERCICIO 10
// Crea una función que calcule el factorial de un
// número dado
// ==================================================

let number = 5

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function calculateFactorial(num) {
    let factorial = 1

    for (let i = num; i > 0; i--) {
        factorial *= i
    }

    return factorial
}

console.log(`${number}! = ${calculateFactorial(number)}`)

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const calculateFactorial2 = function(num) {
    let factorial = 1

    for (let i = num; i > 0; i--) {
        factorial *= i
    }

    return factorial
}

console.log(`${number}! = ${calculateFactorial2(number)}`)

// --------------------------------------------------
// Solución usando Arrow Function
// --------------------------------------------------

const calculateFactorial3 = (num) => {
    let factorial = 1

    for (let i = num; i > 0; i--) {
        factorial *= i
    }

    return factorial
}

console.log(`${number}! = ${calculateFactorial3(number)}`)