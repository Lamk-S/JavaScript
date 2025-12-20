// ==================================================
// EJERCICIO 9
// Añade al mapa una clave con un array que
// almacene los meses de verano
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

// Array que contiene los meses de verano
let summerMonths = ["Diciembre", "Enero", "Febrero"];

// Añadir al Map una clave especial "Verano" que almacene el array
months.set("Verano", summerMonths);

// Mostrar el Map completo en consola
console.log(months);

// Acceder a los meses de verano
console.log(months.get("Verano"));