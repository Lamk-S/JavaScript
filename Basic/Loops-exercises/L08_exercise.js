// ==================================================
// EJERCICIO 8
// Usa un bucle para invertir una cadena de texto
// ==================================================

let cadena = "Hola JavaScript!"
let cadena_inv = ""

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

for (let i = cadena.length-1; i >= 0; i--) {
    cadena_inv += cadena[i]
}

console.log(`(for): ${cadena_inv}`)

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

let i = cadena.length - 1
cadena_inv = ""

while (i >= 0) {
    cadena_inv += cadena[i]
    i--
}

console.log(`(while): ${cadena_inv}`)

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

i = cadena.length - 1
cadena_inv = ""

do {
    cadena_inv += cadena[i]
    i--
} while (i >= 0)

console.log(`(do...while): ${cadena_inv}`)

// --------------------------------------------------
// Solución usando for...of
// --------------------------------------------------

cadena_inv = ""

for (const caracter of cadena) {
    cadena_inv = caracter + cadena_inv
}

console.log(`(for...of): ${cadena_inv}`)