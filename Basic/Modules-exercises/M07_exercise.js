// ==================================================
// EJERCICIO 7
// Exporta una función, una constante y una clase por
// defecto (en caso de que lo permita)
// ==================================================

// --------------------------------------------------
// Constante
// --------------------------------------------------

export const IVA = 0.18

// --------------------------------------------------
// Función
// --------------------------------------------------

export function calculateTotal(price) {
  return price + price * IVA
}

// --------------------------------------------------
// Clase (exportación por defecto)
// --------------------------------------------------

export default class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  finalPrice() {
    return calculateTotal(this.price)
  }
}