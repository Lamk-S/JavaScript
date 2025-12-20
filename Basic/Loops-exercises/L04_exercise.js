// ==================================================
// EJERCICIO 4
// Dado un array de nombres, usa un bucle para
// imprimir cada nombre en la consola
// ==================================================

const names = ["Juan", "Armando", "Lucía", "Angie"]

// --------------------------------------------------
// Solución usando for (por índice)
// --------------------------------------------------

for (let i = 0; i < names.length; i++) {
  console.log(`names[${i}]: ${names[i]}`)
}

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

let i = 0

while (i < names.length) {
  console.log(`names[${i}]: ${names[i]}`)
  i++
}

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

i = 0

do {
  console.log(`names[${i}]: ${names[i]}`)
  i++
} while (i < names.length)

// --------------------------------------------------
// Solución usando for...of (por valor)
// --------------------------------------------------

for (const value of names) {
  console.log(value)
}