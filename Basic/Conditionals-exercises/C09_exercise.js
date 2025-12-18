// ==================================================
// EJERCICIO 9
// Usa un switch para hacer de nuevo el ejercicio 6
// ==================================================

// Mes a evaluar
let month = "Septiembre";

// Variable que almacenará la estación
let season;

// Evaluación del mes usando switch
switch (month) {
  case "Marzo":
  case "Abril":
  case "Mayo":
    season = "Otoño";
    break;
  case "Junio":
  case "Julio":
  case "Agosto":
    season = "Invierno";
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    season = "Primavera";
    break;
  case "Diciembre":
  case "Enero":
  case "Febrero":
    season = "Verano";
    break;
  default:
    season = "Mes no válido";
}

// Resultado
console.log(`Mes: ${month} - Estación del año: ${season}`);