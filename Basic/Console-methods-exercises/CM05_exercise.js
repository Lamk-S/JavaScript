// ==================================================
// EJERCICIO 5
// Utiliza group
// ==================================================

/*
Este ejercicio utiliza console.group y console.groupEnd
para agrupar los mensajes generados durante el proceso
de inicio de sesión.
*/

function login(username, password) {
    console.group("Proceso de Login")

    console.info("Iniciando autenticación...")

    if(!username || !password) {
        console.error("usuario y contraseña son obliatorios")
        console.groupEnd()
        return
    }

    console.info("Validando credenciales...")

    if (username === "admin" && password === "1234") {
        console.log("Inicio de sesión exitoso")
    } else {
        console.warn("Credenciales incorrectas")
    }

    console.info("Finalizando proceso de login")
    console.groupEnd()
}

// Pruebas
login("admin", "1234")
login("admin", "0000")
login("", "")