// ==================================================
// EJERCICIO 2
// Implementa una función currificada que multiplique
// 3 números
// ==================================================

/*
Cálculo de precio final en un sistema de ventas.

Fórmula:
precioFinal = precioBase × impuesto × descuento
*/

// --------------------------------------------------
// Función currificada
// --------------------------------------------------

function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

// --------------------------------------------------
// Uso paso a paso (currying real)
// --------------------------------------------------

// Configuración inicial (precio base)
const withBasePrice = multiply(100)

// Aplicar impuesto (18%)
const withTax = withBasePrice(1.18)

// Aplicar descuento
console.log(withTax(0.9))   // 106.2
console.log(withTax(0.8))   // 94.4

// --------------------------------------------------
// OTRA FORMA DE USO
// --------------------------------------------------
// Todo en una sola línea

console.log(multiply(50)(1.18)(1)) // 59