// ==================================================
// EJERCICIO 10
// Dado un array de números, usa un bucle para crear
// un nuevo array que contenga solo los números
// mayores a 10
// ==================================================

let numbers = [
    3, 12, 7, 25, 8, 15, 2, 30, 11, 5,
    18, 6, 22, 1, 14, 9, 20, 4, 17, 10
]
let num_mayores_10 = []

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        num_mayores_10.push([numbers[i]])
    }
}

console.log(`(for): ${num_mayores_10}`)

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

let i = 0
num_mayores_10 = []

while (i < numbers.length) {
    if (numbers[i] > 10) {
        num_mayores_10.push([numbers[i]])
    }
    i++
}

console.log(`(while): ${num_mayores_10}`)

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

i = 0
num_mayores_10 = []

do {
    if (numbers[i] > 10) {
        num_mayores_10.push([numbers[i]])
    }
    i++
} while (i < numbers.length)

console.log(`(do...while): ${num_mayores_10}`)

// --------------------------------------------------
// Solución usando for...of
// --------------------------------------------------

num_mayores_10 = []

for (const valor of numbers) {
    if (valor > 10) {
        num_mayores_10.push([valor])
    }
}

console.log(`(for...of): ${num_mayores_10}`)