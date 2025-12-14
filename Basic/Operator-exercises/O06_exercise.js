// ==================================================
// EJERCICIO 6
// Utiliza el operador lógico OR (||)
// ==================================================

// OR devuelve true si **al menos una de las condiciones** es verdadera

let estaLloviendo = false
let haceSol = true

// Ejemplo 1: puede salir si está lloviendo o hace sol
console.log("Puede salir:", estaLloviendo || haceSol) // true

// Ejemplo 2: número negativo o cero
let numero = 0
console.log("Número inválido:", numero < 0 || numero === "0") // false

// Ejemplo 3: reutilizando variables del ejercicio 1
let num1 = 10
let num2 = 3
console.log("Num1 menor que 5 o suma menor que 20:", (num1 < 5) || (num1 + num2 < 20)) // true
