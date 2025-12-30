// ==================================================
// EJERCICIO 3
// Lanza una excepción genérica
// ==================================================

// ------------------------------------------
// Función de validación
// ------------------------------------------

function validateAge(age) {
    // Validación de tipo
    if (typeof age !== "number" || !Number.isInteger(age)) {
        throw new Error("La edad debe ser un número y debe ser entero")
    }
    // Regla de negocio
    if (age < 18) {
        throw new Error("Acceso denegado: debes ser mayor de edad")
    }
    return "Acceso permitido"
}

// ------------------------------------------
// Uso de try...catch
// ------------------------------------------

try {
    console.log(validateAge(16))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}