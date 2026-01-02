// --------------------------------------------------
// Función
// --------------------------------------------------

import { IVA } from './constants.js'

export function calculateTotal(price) {
  return price + price * IVA
}