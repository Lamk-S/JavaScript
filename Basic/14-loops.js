/*
====================================================
LOOPS (BUCLES) EN JAVASCRIPT
====================================================

Los bucles permiten ejecutar un bloque de código
repetidamente mientras se cumpla una condición.
*/

// ==================================================
// Bucle for
// ==================================================

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

// Ejemplo recorriendo un array
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Valor ${i}: ${numbers[i]}`)
}

// ==================================================
// Bucle while
// ==================================================

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// --------------------------------------------------
// Bucle infinito (ejemplo comentado)
// --------------------------------------------------

// while (true) {
//   Este código se ejecutaría indefinidamente
// }

// ==================================================
// Bucle do...while
// ==================================================

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while(i < 5)

// ==================================================
// Bucle for...of
// ==================================================

myArray = [1, 2, 3, 4]

mySet = new Set(["Lamk", "Sinester", "lamkdev", 24, true, "kunlancelot@gmail.com"])

myMap = new Map([
  ["Name", "Lamk"],
  ["Email", "kunlancelot@gmail.com"],
  ["Age", 24]
])

myString = "Hola, JavaScript!"


// Recorrer un Array
for (const valor of myArray) {
  console.log(valor)
}

// Recorrer un Set
for (const valor of mySet) {
  console.log(valor)
}

// Recorrer un Map
// Cada iteración devuelve un array [key, value]
for (const valor of myMap) {
  console.log(valor)
}

// Recorrer un String (carácter por carácter)
for (const valor of myString) {
  console.log(valor)
}

// ==================================================
// break y continue
// ==================================================

// - continue → salta a la siguiente iteración
// - break → finaliza el bucle completamente
for (let i = 0; i <10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }

    console.log(`Hola ${i}`)
}