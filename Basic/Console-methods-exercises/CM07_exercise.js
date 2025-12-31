// ==================================================
// EJERCICIO 7
// Valida con assert si un número es positivo
// ==================================================

/*
Este ejercicio valida si un número es positivo.
console.assert muestra un mensaje de error
solo cuando la condición evaluada es falsa.
*/

function validarNumeroPositivo(number) {
    console.info("Iniciando validación del número...")

    // console.assert solo muestra mensaje si la condición es falsa
    console.assert(number > 0, "Error: el número debe ser positivo")

    if (number > 0) {
        console.log("Número válido:", number)
    }
}

// Pruebas
validarNumeroPositivo(10)
validarNumeroPositivo(0)
validarNumeroPositivo(-5)