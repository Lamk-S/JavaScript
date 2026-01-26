// ==================================================
// EJERCICIO 6
// Crea un Callback que se invoque con el resultado
// de la suma de todos los números que se le pasan a
// una función
// ==================================================

// --------------------------------------------------
// Función que recibe números y un callback
// --------------------------------------------------

function sumAndExecute(callback, ...numbers) {

    // Sumar todos los números recibidos
    let result = 0

    for (let number of numbers) {
        result += number
    }

    // Ejecutar el callback con el resultado
    callback(result)
}

// --------------------------------------------------
// Callbacks posibles
// --------------------------------------------------

function showResult(result) {
    console.log(`La suma total es: ${result}`)
}

function showDouble(result) {
    console.log(`El doble del resultado es: ${result * 2}`)
}

// --------------------------------------------------
// Uso de la función
// --------------------------------------------------

sumAndExecute(showResult, 1, 2, 3, 4)
sumAndExecute(showDouble, 5, 10)

// Callback usando arrow function
sumAndExecute((result) => {
    console.log(`Resultado desde arrow function: ${result}`)
}, 7, 8, 9)