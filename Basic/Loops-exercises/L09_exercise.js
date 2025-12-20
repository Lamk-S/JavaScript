// ==================================================
// EJERCICIO 9
// Usa un bucle para generar los primeros 10 números
// de la secuencia de Fibonacci
// ==================================================

// Fórmula General: F(n) ​= F(n−1) ​+ F(n−2)​
let n = 10 // cantidad de números
let fib = [0, 1]

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
}

console.log(`(for): ${fib}`)

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

let i = 2
fib = [0, 1]

while (i < n) {
    fib[i] = fib[i-1] + fib[i-2]
    i++
}

console.log(`(while): ${fib}`)

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

i = 2
fib = [0, 1]

do {
    fib[i] = fib[i-1] + fib[i-2]
    i++
} while (i < n)

console.log(`(do...while): ${fib}`)