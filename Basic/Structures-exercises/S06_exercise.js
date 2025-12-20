// ==================================================
// EJERCICIO 6
// Elimina uno concreto a tu elección
// ==================================================

// Set que almacena una colección inicial de libros
let books = new Set([
  "Don Quijote de la Mancha",
  "Cien años de soledad",
  "El Señor de los Anillos",
  "El Principito",
  "Los Ojos de mi Princesa"
]);

// Elimina un libro específico del Set
books.delete("El Principito");

console.log(books)