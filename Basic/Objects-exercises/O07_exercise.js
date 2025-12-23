// ==================================================
// EJERCICIO 7
// Crea un objeto anidado
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