// ==================================================
// EJERCICIO 9
// Utiliza el operador ternario
// ==================================================

// Variables de ejemplo
let edad = 20
let tienePermiso = true

// Ejemplo 1: Verifica si puede conducir
let puedeConducir = (edad >= 18 && tienePermiso) ? "Puede conducir" : "No puede conducir"
console.log(puedeConducir) // "Puede conducir"

// Ejemplo 2: Número positivo, negativo o cero usando ternario anidado
let numero = -5
let tipoNumero = (numero > 0) ? "Positivo" : (numero < 0) ? "Negativo" : "Cero"
console.log(tipoNumero) // "Negativo"
