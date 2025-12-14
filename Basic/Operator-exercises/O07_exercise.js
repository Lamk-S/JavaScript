// ==================================================
// EJERCICIO 7
// Combina ambos operadores lógicos (AND y OR)
// ==================================================

// Variables de ejemplo
let edad = 20
let tieneLicencia = true
let estaLloviendo = false
let haceSol = true

// Ejemplo 1: Puede conducir si es mayor de edad y tiene licencia, 
// o si es menor de edad pero un adulto lo acompaña
let adultoAcompañante = false
console.log(
  "Puede conducir:",
  (edad >= 18 && tieneLicencia) || (edad < 18 && adultoAcompañante)
) // true

// Ejemplo 2: Actividad permitida si hace sol y temperatura > 20 
// o si está nublado y hay paraguas
let temperatura = 25
let hayParaguas = false
console.log(
  "Actividad permitida:",
  (haceSol && temperatura > 20) || (!haceSol && hayParaguas)
) // true

// Ejemplo 3: Combinando resultados de operaciones aritméticas
let num1 = 10
let num2 = 3
let suma = num1 + num2 // 13
let multiplicacion = num1 * num2 // 30
console.log(
  "Condición combinada:",
  (suma > 15 && multiplicacion < 50) || (num1 === 10)
) // true
