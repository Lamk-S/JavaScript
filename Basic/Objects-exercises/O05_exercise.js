// ==================================================
// EJERCICIO 5
// Agrega una función e invócala
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

let myObject = {
    name: "Lamk",
    age: 24,
    email: "kunlancelot@gmail.com",
    greet: function () {
        console.log(`Hola, mucho gusto. Mi nombre es ${this.name}`)
    }
}

// --------------------------------------------------
// Invocación del método
// --------------------------------------------------

myObject.greet()