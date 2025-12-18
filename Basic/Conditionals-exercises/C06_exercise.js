// ==================================================
// EJERCICIO 6
// Muestra en que estación del año nos encontramos
// dependiendo del valor de una variable "mes"
// ==================================================

// Mes a evaluar
let month = "Julio";

// Variable que almacenará la estación
let season;

// Evaluación del mes (Hemisferio Sur)
if (month === "Marzo" || month === "Abril" || month === "Mayo") {
  season = "Otoño";
} else if (month === "Junio" || month === "Julio" || month === "Agosto") {
  season = "Invierno";
} else if (month === "Septiembre" || month === "Octubre" || month === "Noviembre") {
  season = "Primavera";
} else {
  season = "Verano";
}

// Resultado
console.log(`Mes: ${month} - Estación del año: ${season}`);