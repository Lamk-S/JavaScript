// ==================================================
// EJERCICIO 9
// Comprueba si los dos objetos creados son iguales
// ==================================================

// --------------------------------------------------
// Definición del objeto 1
// --------------------------------------------------

let myObject1 = {
    name: "Lamk",
    age: 24,
    email: "kunlancelot@gmail.com"
}

// --------------------------------------------------
// Definición del objeto 2
// --------------------------------------------------

let myObject2 = {
    name: "Lamk",
    age: 24,
    email: "kunlancelot@gmail.com"
}

// --------------------------------------------------
// Comparación de objetos
// --------------------------------------------------
// En JavaScript, los objetos se comparan por referencia,
// no por su contenido.

console.log(myObject1 == myObject2)   // false
console.log(myObject1 === myObject2)  // false


// --------------------------------------------------
// Comparación por referencia
// --------------------------------------------------
// Ambas variables apuntan al mismo objeto en memoria.

const myObject3 = myObject1

console.log(myObject1 === myObject3)  // true