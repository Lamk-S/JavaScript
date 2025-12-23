// ==================================================
// EJERCICIO 10
// Comprueba si dos propiedades diferentes son
// iguales
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

const myObject = {
  name: "Lamk",
  age: 24,
  email: "kunlancelot@gmail.com"
}

// --------------------------------------------------
// Comparación entre propiedades diferentes
// --------------------------------------------------

console.log(myObject.name === myObject.email) // false
console.log(myObject.name === myObject.age)   // false