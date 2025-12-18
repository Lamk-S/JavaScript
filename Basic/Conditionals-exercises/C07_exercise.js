// ==================================================
// EJERCICIO 7
// Muestra el número de días que tiene un mes
// dependiendo de la variable del ejercicio anterior
// ==================================================

// Mes a evaluar
let month = "Julio";

// Variable que almacenará el mensaje final
let message;

// Evaluación del mes
if (month === "Abril" || month === "Junio" || month === "Septiembre" || month === "Noviembre") {
    message = "30 días"
} else if (month === "Febrero") {
    message = "28 días (29 días si es año bisiesto)"
} else {
    message = "31 días"
}

// Resultado
console.log(`${month}: tiene ${message}.`);