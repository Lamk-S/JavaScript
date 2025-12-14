// ==================================================
// EJERCICIO 5
// Utiliza el operador lógico AND (&&)
// ==================================================

// AND devuelve true solo si **ambas condiciones** son true

let edad = 24
let tieneLicencia = true

// Ejemplo 1: mayor de edad y tiene licencia
console.log("Puede conducir:", edad >= 18 && tieneLicencia) // true

// Ejemplo 2: número positivo y menor que 100
let numero = 50
console.log("Número válido:", numero > 0 && numero < 100) // true

// Ejemplo 3: dos condiciones comparando variables del ejercicio 1
let num1 = 10
let num2 = 3
console.log("Suma menor que 20 y num1 mayor que num2:", (num1 + num2 < 20) && (num1 > num2)) // true
