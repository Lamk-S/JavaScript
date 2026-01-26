// ==================================================
// EJERCICIO 9
// Implementa un retorno implícito
// ==================================================

// Cálculo rápido de valores derivados.

// --------------------------------------------------
// Forma tradicional
// --------------------------------------------------

function calculateTax(price) {
    return price * 0.18
}

// --------------------------------------------------
// Arrow function con retorno implícito
// --------------------------------------------------

const calculateTaxImplicit = price => price * 0.18

// --------------------------------------------------
// Uso de la función
// --------------------------------------------------

console.log(calculateTax(100))          // 18
console.log(calculateTaxImplicit(100))  // 18