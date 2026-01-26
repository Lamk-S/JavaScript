// ==================================================
// EJERCICIO 7
// Desarrolla una función parcial
// ==================================================

/*
OBJETIVO:
- Crear una función parcial
- Fijar uno de los parámetros
- Retornar una nueva función con menos argumentos

Aplicación de descuentos en un sistema de ventas.
El porcentaje de descuento se define una sola vez
y luego se reutiliza con distintos precios.
*/

// --------------------------------------------------
// Función base
// --------------------------------------------------

function applyDiscount(discount, price) {
    return price - (price * discount)
}

// --------------------------------------------------
// Función parcial
// --------------------------------------------------

function partialDiscount(discount) {
    /*
    Se fija el valor del descuento
    y se retorna una función que
    solo necesita el precio.
    */
    return function (price) {
        return applyDiscount(discount, price)
    }
}

// --------------------------------------------------
// Uso de la función parcial
// --------------------------------------------------

// Se crea una función especializada
const tenPercentDiscount = partialDiscount(0.10)
const twentyPercentDiscount = partialDiscount(0.20)

// Se reutiliza la función retornada
console.log(tenPercentDiscount(100))    // 90
console.log(tenPercentDiscount(250))    // 225

console.log(twentyPercentDiscount(100)) // 80
