// ==================================================
// EJERCICIO 9
// Crea una función que verifique si un objeto tiene
// una propiedad específica y lance una excepción
// personalizada
// ==================================================

// ------------------------------------------
// Clase de excepción personalizada
// ------------------------------------------

class MissingPropertyError extends Error {
    constructor(message, propertyName) {
        super(message)
        this.name = "MissingPropertyError"
        this.propertyName = propertyName
    }

    showProperty() {
        console.log("Propiedad faltante:", this.propertyName)
    }
}

// ------------------------------------------
// Función que verifica si un objeto tiene una propiedad
// ------------------------------------------

function checkProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new MissingPropertyError(
            `El objeto no tiene la propiedad "${property}"`,
            property
        )
    }
    return `El objeto tiene la propiedad "${property}"`
}

// ------------------------------------------
// Ejemplo de uso con try-catch-finally
// ------------------------------------------

const user = {
    username: "Lamk",
    email: "lamk@gmail.com"
}

try {
    console.log(checkProperty(user, "username")) // Correcto
    console.log(checkProperty(user, "age"))      // Error: falta propiedad
} catch (error) {
    if (error instanceof MissingPropertyError) {
        console.log("Error personalizado:", error.message)
        error.showProperty()
    } else {
        console.log("Error genérico:", error.message)
    }
} finally {
    console.log("Verificación de propiedades finalizada")
}
