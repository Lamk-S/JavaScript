// ==================================================
// EJERCICIO 7
// Crea un mapa que asocie el número del mes a
// su nombre
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

// Mostrar el contenido completo del Map
console.log(months);

// Ejemplo de acceso a un mes usando su número
console.log(months.get(5)); // Mayo