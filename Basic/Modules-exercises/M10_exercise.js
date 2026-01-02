// ==================================================
// EJERCICIO 10
// Importa una función, una constante y una clase
// desde un directorio diferente al anterior
// ==================================================

// --------------------------------------------------
// Importaciones desde otro directorio
// --------------------------------------------------

import Product, { IVA, calculateTotal } from './M09_exercise/index.js'

// --------------------------------------------------
// Uso de la constante
// --------------------------------------------------

console.log(IVA)

// --------------------------------------------------
// Uso de la función
// --------------------------------------------------

console.log(calculateTotal(200))

// --------------------------------------------------
// Uso de la clase
// --------------------------------------------------

const product = new Product('Pantalón', 150)
console.log(product.finalPrice())