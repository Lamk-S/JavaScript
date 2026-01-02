// ==================================================
// EJERCICIO 8
// Importa una función, una constante y una clase por
// defecto (en caso de que lo permita)
// ==================================================

// --------------------------------------------------
// Importaciones
// --------------------------------------------------

import Product, { IVA, calculateTotal } from './M07_exercise.js'

// --------------------------------------------------
// Uso de la constante
// --------------------------------------------------

console.log(IVA)

// --------------------------------------------------
// Uso de la función
// --------------------------------------------------

console.log(calculateTotal(100))

// --------------------------------------------------
// Uso de la clase
// --------------------------------------------------

const product = new Product('Camisa', 100)
console.log(product.finalPrice())