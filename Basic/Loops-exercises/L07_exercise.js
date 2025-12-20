// ==================================================
// EJERCICIO 7
// Escribe un bucle que imprima la tabla de
// multiplicar del 5
// ==================================================

let base_tabla = [1, 2, 3, 4, 5, 6, 7, 9, 10 , 11, 12]

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

console.log("-- (*) Tabla del 5 → for --")

for (let i = 0; i < base_tabla.length; i++) {
    console.log(`${base_tabla[i]} x 5 = ${base_tabla[i]*5}`)
}

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

console.log("-- (*) Tabla del 5 → while --")

let i = 0

while (i < base_tabla.length) {
    console.log(`${base_tabla[i]} x 5 = ${base_tabla[i]*5}`)
    i++
}

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

console.log("-- (*) Tabla del 5 → do...while --")

i = 0

do {
    console.log(`${base_tabla[i]} x 5 = ${base_tabla[i]*5}`)
    i++
} while (i < base_tabla.length)

// --------------------------------------------------
// Solución usando for...of
// --------------------------------------------------

console.log("-- (*) Tabla del 5 → for...of --")

for (const valor of base_tabla) {
    console.log(`${valor} x 5 = ${valor*5}`)
}