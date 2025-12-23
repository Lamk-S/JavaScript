// ==================================================
// EJERCICIO 4
// Elimina una de las 3 primeras propiedades
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

let myObject = {
    name: "Lamk",
    age: 24,
    email: "kunlancelot@gmail.com"
}

// --------------------------------------------------
// Eliminación de una propiedad
// --------------------------------------------------

delete(myObject.age)

// Se verifica que la propiedad haya sido eliminada.
console.log(myObject)