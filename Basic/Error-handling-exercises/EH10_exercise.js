// ==================================================
// EJERCICIO 10
// Crea una función que realice reintentos en caso de
// error hasta un máximo de 10
// ==================================================

// ------------------------------------------
// Función que puede fallar aleatoriamente
// ------------------------------------------

function unreliableOperation() {
    // Simula un 50% de probabilidad de fallo
    if (Math.random() < 0.5) {
        throw new Error("La operación falló")
    }
    return "Operación exitosa"
}

// ------------------------------------------
// Función que intenta reintentar hasta 10 veces
// ------------------------------------------

function executeWithRetries(maxRetries = 10) {
    let attempt = 0
    while (attempt < maxRetries) {
        try {
            attempt++
            const result = unreliableOperation()
            console.log(result)
            break // Sale del bucle si tiene éxito
        } catch (error) {
            console.log(`Intento ${attempt} fallido: ${error.message}`)
            if (attempt === maxRetries) {
                console.log("Se alcanzó el máximo de reintentos")
            }
        } finally {
            console.log(`Reintento número ${attempt} finalizado`)
            console.log("-----------------------------")
        }
    }
}

// ------------------------------------------
// Ejecutamos la función con reintentos
// ------------------------------------------

executeWithRetries()