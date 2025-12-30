// ==================================================
// EJERCICIO 4
// Crea una excepción personalizada
// ==================================================

// ------------------------------------------
// Excepción personalizada
// ------------------------------------------

class ValidateAgeError extends Error {
    constructor(message, age) {
        super(message)
        this.age = age
    }

    // Método personalizado
    printAge() {
        console.log("Edad ingresada:", this.age)
    }
}