// ==================================================
// EJERCICIO 3
// Verifica si un número es positivo, negativo o
// cero e imprime un mensaje
// ==================================================

// Número a evaluar
let numero = 0;

// Variable que almacenará el tipo de número
let tipoNumero;

// Evaluación del número
if (numero > 0) {
  tipoNumero = "Positivo";
} else if (numero < 0) {
  tipoNumero = "Negativo";
} else {
  tipoNumero = "Cero";
}

// Resultado
console.log("Tipo de número:", tipoNumero);