// ==================================================
// EJERCICIO 5
// Añade dos más. Uno de ellos repetido
// ==================================================

// Set que almacena una colección inicial de libros
let books = new Set([
  "Don Quijote de la Mancha",
  "Cien años de soledad",
  "El Señor de los Anillos",
  "El Principito",
  "Los Ojos de mi Princesa"
]);

// Agrega un nuevo libro al Set
books.add("Crimen y castigo");

// Agregar un libro repetido
books.add("El Principito");

console.log(books)