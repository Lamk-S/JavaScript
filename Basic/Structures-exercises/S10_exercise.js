// ==================================================
// EJERCICIO 10
// Crea un Array, transfórmalo a un Set y
// almacénalo en un Map
// ==================================================

// Array que contiene los meses de verano
let summerMonths = ["Diciembre", "Enero", "Febrero"];

// Convertir el Array a un Set para asegurar valores únicos
let setSummerMonths = new Set(summerMonths);

// Mostrar el Array original y el Set
console.log("Array original:", summerMonths);
console.log("Set (valores únicos):", setSummerMonths);

// Crear un Map y almacenar el Set con la clave "Verano"
let mapSummerMonths = new Map();
mapSummerMonths.set("Verano", setSummerMonths);

// Mostrar el Map completo
console.log("Map con meses de verano:", mapSummerMonths);