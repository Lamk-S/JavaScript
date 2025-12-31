// ==================================================
// EJERCICIO 4
// Utiliza table
// ==================================================

/*
Este ejercicio simula un proceso de inicio de sesión.
console.table se utiliza para mostrar la información
del usuario y el estado del logeo en formato de tabla.
*/

function login(username, password) {
    let loginResult

    // Validación básica
    if (!username || !password) {
        loginResult = {
            usuario: username || "No definido",
            estado: "Error",
            mensaje: "Usuario y contraseña son obligatorios"
        }

        console.table([loginResult])
        return
    }

    // Simulación de credenciales correctas
    if (username === "admin" && password === "1234") {
        loginResult = {
            usuario: username,
            estado: "Éxito",
            mensaje: "Inicio de sesión correcto"
        }
    } else {
        loginResult = {
            usuario: username,
            estado: "Fallido",
            mensaje: "Credenciales incorrectas"
        }
    }

    // Mostramos el resultado en tabla
    console.table([loginResult])
}

// Pruebas del proceso de logeo
login("admin", "1234")
login("admin", "0000")
login("", "")