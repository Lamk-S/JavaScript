// ==================================================
// EJERCICIO 6
// Dado un array de números, usa un bucle para
// multiplicar todos los números y mostrar el
// producto
// ==================================================

let numbers = [5, 4, 10, 3]
let producto = 1

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

for (let i = 0; i < numbers.length; i++) {
    producto *= numbers[i]
}

console.log(`Producto (for): ${producto}`)

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

let i = 0
producto = 1

while (i < numbers.length) {
    producto *= numbers[i]
    i++
}

console.log(`Producto (while): ${producto}`)

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

i = 0
producto = 1

do {
    producto *= numbers[i]
    i++
} while (i < numbers.length)

console.log(`Producto (do...while): ${producto}`)

// --------------------------------------------------
// Solución usando for...of
// --------------------------------------------------

producto = 1

for (const valor of numbers) {
    producto *= valor
}

console.log(`Producto (for...of): ${producto}`)