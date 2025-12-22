// ==================================================
// EJERCICIO 1
// Crea una función que reciba dos números y
// devuelva su suma
// ==================================================

// --------------------------------------------------
// Declaración de función
// --------------------------------------------------

function sum(a, b) {
    return a + b
}

console.log("(function):", sum(5, 10))


// --------------------------------------------------
// Función con parámetros por defecto
// --------------------------------------------------

function suDefault(a = 0, b = 0) {
    return a + b
}

console.log("(default params):", sumDefault(5))
console.log("(default params):", sumDefault())

// --------------------------------------------------
// Función anónima (Function Expression)
// --------------------------------------------------

const sumExpression = function (a, b) {
    return a + b
}

console.log("(expression):", sumExpression(3, 7))

// --------------------------------------------------
// Arrow function (sintaxis simplificada)
// --------------------------------------------------

const sumArrowShort = (a, b) => a + b

console.log("(arrow short):", sumArrowShort(8, 2))