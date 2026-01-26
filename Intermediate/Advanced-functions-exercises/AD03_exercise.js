// ==================================================
// EJERCICIO 3
// Desarrolla una función recursiva que calcule la
// potencia de un número elevado a un exponente
// ==================================================

// --------------------------------------------------
// Variables de entrada
// --------------------------------------------------

const base = 5
const exponent = 4

// --------------------------------------------------
// Función recursiva
// --------------------------------------------------

function power(base, exponent) {

    // Validación básica
    if (exponent < 0) {
        return "El exponente debe ser un número positivo"
    }

    // Caso base: todo número elevado a 0 es 1
    if (exponent === 0) {
        return 1
    }

    // Llamada recursiva
    return base * power(base, exponent - 1)
}

console.log(power(base, exponent))