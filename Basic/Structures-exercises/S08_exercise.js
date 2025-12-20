// ==================================================
// EJERCICIO 8
// Comprueba si el mes número 5 existe en el map
// e imprime su valor
// ==================================================

// Map que relaciona el número del mes con su nombre
let months = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
]);


// Número de mes a comprobar
let monthNumber = 5;

// Verifica si el mes existe en el Map
if (months.has(monthNumber)) {
  // Si existe, imprime su valor
  console.log(months.get(monthNumber));
} else {
  console.log("El mes no existe en el Map.");
}