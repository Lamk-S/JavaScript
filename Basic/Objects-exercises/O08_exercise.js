// ==================================================
// EJERCICIO 8
// Accede y muestra el valor de las propiedades
// anidadas
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

let myObject = {
    name: "Lamk",
    age: 24,
    email: "kunlancelot@gmail.com",
    walk: {
        km: 20,
        mission: function () {
            console.log(`Hoy recorreré ${this.km} km`)
        }
    }
}

// --------------------------------------------------
// Acceso a propiedades y métodos anidados
// --------------------------------------------------

myObject.walk.mission()