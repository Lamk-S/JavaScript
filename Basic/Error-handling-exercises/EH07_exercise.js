// ==================================================
// EJERCICIO 7
// Captura varias excepciones en un mismo try-catch
// ==================================================

// ------------------------------------------
// Clase de excepción personalizada
// ------------------------------------------

class UserError extends Error {
    constructor(message, username) {
        super(message)
        this.name = "UserError"
        this.username = username
    }

    showUsername() {
        console.log("Usuario involucrado:", this.username)
    }
}

// ------------------------------------------
// Función para registrar usuarios
// ------------------------------------------

function registerUser(user) {
    // Error genérico si faltan campos
    if (!user.username || !user.email) {
        throw new Error("Faltan datos obligatorios (username o email)")
    }
    // Error personalizado si el nombre de usuario es demasiado corto
    if (user.username.length < 3) {
        throw new UserError("El nombre de usuario es demasiado corto", user.username)
    }
    // Error de tipo si el email es inválido
    if (!user.email.includes("@")) {
        throw new TypeError("El email no es válido")
    }
    return `Usuario ${user.username} registrado correctamente`
}

// ------------------------------------------
// Uso de try...catch...finally
// ------------------------------------------

const users = [
    { username: "Lamk", email: "lamk@gmail.com" },
    { username: "Bo", email: "bo@gmail.com" },     // username corto
    { username: "Carlos", email: "carlos.gmail" }, // email inválido
    { username: "", email: "" }                    // datos faltantes
]

try {
    const errors = []
    users.forEach((user) => {
        try {
            console.log(registerUser(user))
        } catch (error) {
            errors.push(error) // Guardamos los errores para procesarlos después
        }
    })

    // Procesamos todos los errores al final
    if (errors.length > 0) {
        errors.forEach((error) => {
            if (error instanceof UserError) {
                console.log("Error personalizado:", error.message)
                error.showUsername()
            } else if (error instanceof TypeError) {
                console.log("Error de tipo:", error.message)
            } else if (error instanceof Error) {
                console.log("Error genérico:", error.message)
            }
        })
    }
} finally {
    console.log("Intento de registro finalizado para todos los usuarios")
}