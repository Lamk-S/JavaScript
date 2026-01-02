// --------------------------------------------------
// Clase (exportación por defecto)
// --------------------------------------------------

import { calculateTotal } from './functions.js'

export default class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  finalPrice() {
    return calculateTotal(this.price)
  }
}