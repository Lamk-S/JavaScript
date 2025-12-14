// ==================================================
// EJERCICIO 10
// Combina operadores aritméticos, de comparación y
// lógicos
// ==================================================

// Variables de ejemplo
let num1 = 10
let num2 = 5
let num3 = 8

// Ejemplo 1: Suma y comparación
console.log(
  "Suma menor que 20 y num1 menor que num2:",
  (num1 + num2 < 20) && (num1 < num2)
) // false

// Ejemplo 2: Multiplicación y comparación con OR
console.log(
  "Multiplicación mayor que 50 o num3 igual a 8:",
  (num1 * num2 > 50) || (num3 === 8)
) // true

// Ejemplo 3: Combinación compleja con módulo, exponente y negación
console.log(
  "Condición compleja:",
  !((num1 % 3 === 1) && (num2 ** 2 > 20)) || (num3 < 10)
) // true

// Ejemplo 4: Comparación usando división y AND
console.log(
  "División mayor que 3 y num1 par:",
  (num1 / num2 > 3) && (num1 % 2 === 0)
) // false

// Ejemplo 5: Combinación usando suma, resta y OR
console.log(
  "Suma mayor que 15 o resta menor que 0:",
  ((num1 + num3) > 15) || ((num2 - num3) < 0)
) // true
