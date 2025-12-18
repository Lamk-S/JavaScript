// ==================================================
// EJERCICIO 10
// Usa un switch para hacer de nuevo el ejercicio 7
// ==================================================

// Mes a evaluar
let month = "Febrero";

// Variable que almacenará el mensaje final
let message;

// Evaluación del mes usando switch
switch (month) {
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    message = "tiene 30 días";
    break;
  case "Febrero":
    message = "tiene 28 días (29 días si es año bisiesto)";
    break;
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    message = "tiene 31 días";
    break;
  default:
    message = "Mes no válido";
}

// Resultado
console.log(`${month}: ${message}.`);