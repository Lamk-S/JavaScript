// ==========================================
// MANEJO DE ERRORES Y EXCEPCIONES
// ==========================================

// ------------------------------------------
// Excepciones
// ------------------------------------------

// Una excepción ocurre cuando el programa
// intenta acceder a algo que no existe
let myObject

// console.log(myObject.email) // Provocaría un error

// ------------------------------------------
// Tratamiento de errores
// ------------------------------------------
// try...catch permite manejar errores
// sin detener completamente el programa

try {
    // Cödigo que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución de errores")
} catch {
    // Se ejecuta si ocurre un error en try
    console.log("Se ha producido un error")
}

// ------------------------------------------
// Captura del error
// ------------------------------------------
// El objeto error contiene información
// sobre lo que falló

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error)
} finally {
    // finally se ejecuta siempre
    console.log("Este código se ejecuta siempre")
}

// ------------------------------------------
// try...finally (NO soportado)
// ------------------------------------------
// JavaScript requiere catch si se usa try

// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }


// ------------------------------------------
// Lanzamiento de errores
// ------------------------------------------
// throw permite generar errores manualmente

// throw new Error("Se ha producido un error")

// ------------------------------------------
// Ejemplo práctico: función con validaciones
// ------------------------------------------

function sumIntegers (a, b) {
    // Validar tipo de datos
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Esta operación sólo suma números")
    }
    // Validar que sean enteros
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Está operación sólo suma números enteros")
    }
    // Validar que no sean cero
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

// ------------------------------------------
// Uso de try...catch con la función
// ------------------------------------------

try {
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers("5", 10))
    console.log(sumIntegers(5, "10"))
    console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error)
}

// ------------------------------------------
// Capturar varios tipos de errores
// ------------------------------------------

try {
    console.log(sumIntegers(5.5, 10))
    // console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Error general:", error.message)
    }
}

// ------------------------------------------
// Excepciones personalizadas
// ------------------------------------------
// Se pueden crear clases que extienden Error

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.name = "SumZeroIntegerError"
        this.a = a
        this.b = b
    }

    // Método personalizado
    printNumbers() {
        console.log(this.a, "+", this.b)
    }
}

// ------------------------------------------
// Uso de la excepción personalizada
// ------------------------------------------

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Error personalizado:", error.message)

    if (error instanceof SumZeroIntegerError) {
        error.printNumbers()
    }
}