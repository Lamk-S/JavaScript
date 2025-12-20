// ==================================================
// EJERCICIO 3
// Crea un bucle que imprima todos los números pares
// entre 1 y 50
// ==================================================

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

// Usando condición
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Usando incremento de 2 en 2
for (let i = 2; i <= 50; i += 2) {
  console.log(i)
}

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

// Usando condición
let i = 1

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i)
  }
  i++
}

// Usando incremento de 2 en 2
i = 2

while (i <= 50) {
  console.log(i)
  i += 2
}

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

// Usando condición
i = 1

do {
  if (i % 2 === 0) {
    console.log(i)
  }
  i++
} while (i <= 50)

// Usando incremento de 2 en 2
i = 2

do {
  console.log(i)
  i += 2
} while (i <= 50)