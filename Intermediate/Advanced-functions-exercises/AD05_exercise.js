// ==================================================
// EJERCICIO 5
// Crea una función sumManyTimes
// (multiplier, ...numbers) que primero sume todos los
// números (usando parámetros Rest) y luego
// multiplique el resultado por multiplier
// ==================================================

function sumManyTimes(multiplier, ...numbers) {

    // Acumulador local
    let result = 0

    // Sumar todos los valores recibidos
    for (let number of numbers) {
        result += number
    }

    // Multiplicar la suma por el multiplicador
    return result * multiplier
}

// --------------------------------------------------
// Uso de la función
// --------------------------------------------------

console.log(sumManyTimes(2, 1, 2, 3))     // (1+2+3) * 2 = 12
console.log(sumManyTimes(3, 4, 5))        // (4+5) * 3 = 27
console.log(sumManyTimes(1, 10, 20, 30))  // 60