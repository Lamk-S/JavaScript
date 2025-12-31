// ==================================================
// EJERCICIO 6
// Utiliza time
// ==================================================

/*
Este ejercicio mide el tiempo que tarda un proceso
de inicio de sesión.
console.time y console.timeEnd permiten analizar
el rendimiento de un bloque de código.
*/

function login(username, password) {
    console.time("Tiempo de autenticación")

    // Simulación de validaciones
    if (!username || !password) {
        console.error("Usuario y contraseña son obigatorios")
        console.timeEnd("Tiempo de autenticación")
        return
    }

    // Simulación de proceso de autenticación
    for (let i = 0; i < 1000000; i++) {
        // Proceso simulado
    }

    if (username === "admin" && password === "1234") {
        console.log("Inicio de sesión exitoso")
    } else {
        console.warn("Credenciales incorrectas")
    }

    console.timeEnd("Tiempo de autenticación")
}

// Pruebas
login("admin", "1234")
login("admin", "0000")
login("", "")