// ==================================================
// EJERCICIO 5
// Escribe un bucle que cuente el número de vocales
// en una cadena de texto
// ==================================================

let texto = "Bienvenido al mundo de JavaScript!"
const vocales = "aeiou"
let contador = 0

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

for (let i = 0; i < texto.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (texto[i].toLowerCase() === vocales[j]) {
      contador++
      break
    }
  }
}

console.log(`Vocales (for): ${contador}`)

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

let i = 0
let j = 0
contador = 0

while (i < texto.length) {
  while (j < vocales.length) {
    if (texto[i].toLowerCase() === vocales[j]) {
      contador++
      break
    }
    j++
  }
  i++
  j = 0
}

console.log(`Vocales (while): ${contador}`)

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

i = 0
j = 0
contador = 0

do {
  do {
    if (texto[i].toLowerCase() === vocales[j]) {
      contador++
      break
    }
    j++
  } while (j < vocales.length)
  i++
  j = 0
} while (i < texto.length)

console.log(`Vocales (do...while): ${contador}`)

// --------------------------------------------------
// Solución usando for...of
// --------------------------------------------------

contador = 0

for (const caracter of texto) {
  for (const vocal of vocales) {
    if (caracter.toLowerCase() === vocal) {
      contador++
      break
    }
  }
}

console.log(`Vocales (for...of): ${contador}`)