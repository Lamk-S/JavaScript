// ==================================================
// EJERCICIO 5
// Lanza una excepción personalizada
// ==================================================

// ------------------------------------------
// Excepción personalizada
// ------------------------------------------

class ValidateAgeError extends Error {
    constructor(message, age) {
        super(message)
        this.name = "ValidateAgeError"
        this.age = age
    }

    // Método personalizado
    printAge() {
        console.log("Edad ingresada:", this.age)
    }
}

// ------------------------------------------
// Función que valida la edad
// ------------------------------------------

function validateAge(age) {
    if (typeof age !== "number" || !Number.isInteger(age)) {
        throw new ValidateAgeError("La edad debe ser un número entero", age)
    }
    if (age < 0 || age > 120) {
        throw new ValidateAgeError("Edad fuera de rango válido (0-120)", age)
    }
    return true
}

// ------------------------------------------
// Uso de try...catch
// ------------------------------------------

try {
    console.log(validateAge(25))      // Correcto
    // console.log(validateAge("25"))    // Error: no es número
    // console.log(validateAge(150))     // Error: fuera de rango
} catch (error) {
    if (error instanceof ValidateAgeError) {
        console.log("Se ha producido un error personalizado:", error.message)
        error.printAge()
    } else {
        console.log("Se ha producido un error genérico:", error)
    }
}