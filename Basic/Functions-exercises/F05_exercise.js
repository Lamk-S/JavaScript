// ==================================================
// EJERCICIO 5
// Crea una función que reciba un número y devuelva
// true si es primo, y false en caso contrario
// ==================================================

let number = 31

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function verifyNumber(num) {
    if (num < 2) return false

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

console.log("El número", number, "es primo (function):", verifyNumber(number))

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const verifyNumber2 = function (num) {
    if (num < 2) return false

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

console.log("El número", number, "es primo (expression):", verifyNumber2(number))

// --------------------------------------------------
// Solución usando Arrow Function
// --------------------------------------------------

const verifyNumber3 = (num) => {
    if (num < 2) return false

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

console.log("El número", number, "es primo (arrow):", verifyNumber3(number))