// ==================================================
// EJERCICIO 2
// Crea un bucle que sume todos los números del 1
// al 100 y muestre el resultado
// ==================================================

// --------------------------------------------------
// Solución usando for
// --------------------------------------------------

let result = 0

for (let i = 1; i <= 100; i++) {
  result += i
}

console.log(`Resultado con for: ${result}`)

// --------------------------------------------------
// Solución usando while
// --------------------------------------------------

result = 0
let i = 1

while (i <= 100) {
  result += i
  i++
}

console.log(`Resultado con while: ${result}`)

// --------------------------------------------------
// Solución usando do...while
// --------------------------------------------------

result = 0
i = 1

do {
  result += i
  i++
} while (i <= 100)

console.log(`Resultado con do...while: ${result}`)