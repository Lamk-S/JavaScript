// ==================================================
//        OPERATORS (Operadores en JavaScript)
// ==================================================


// ==================================================
// OPERADORES ARITMÉTICOS
// ==================================================

let a = 5
let b = 10

console.log(a + b)  // Suma
console.log(a - b)  // Resta
console.log(a * b)  // Multiplicación
console.log(a / b)  // División

console.log(a % b)  // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// ==================================================
// OPERADORES DE ASIGNACIÓN
// ==================================================

let myVariable = 2
console.log(myVariable) // 2

// Suma y asignación
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable) // 4

myVariable -= 2     // Resta y asignación
myVariable += 2     // Multiplicación y asignación
myVariable /= 2     // División y asignación
myVariable %= 2     // Módulo y asignación
myVariable **= 2    // Exponente y asignación

// ==================================================
// OPERADORES DE COMPARACIÓN
// ==================================================

console.log(a > b)      // false
console.log(a < b)      // true
console.log(a >= b)     // false
console.log(a <= b)     // true

// Igualdad por valor (NO compara el tipo)
console.log(a == b)     // false
console.log(a == 5)     // false → a ahora vale 6
console.log(a == "6")   // true

// Igualdad estricta (compara tipo y valor)
console.log(a === a)    // true
console.log(a === 6)    // true
console.log(a === "6")  // false

// Diferente
console.log(a != 6)     // false
console.log(a !== "6")  // true

// Comparaciones curiosas (coerción de tipos)
console.log(0 == false) // true
console.log(1 == false) // false
console.log(2 == false) // false
console.log(0 == "")    // true
console.log(0 == " ")   // true
console.log(0 == '')    // true
console.log(0 == "Hola")// false

// Comparación estricta
console.log(0 === "")   // false

console.log(undefined == null)  // true
console.log(undefined === null) // false

// ==================================================
// TRUTHY Y FALSY VALUES
// ==================================================

// Truthy values (valores evaluados como true)
// - Todos los números distintos de 0
// - Todas las cadenas de texto no vacías
// - El boolean true
// - Objetos, arreglos y funciones

// Falsy values (valores evaluados como false)
// - 0
// - 0n
// - null
// - undefined
// - NaN
// - false
// - ""

// ==================================================
// OPERADORES LÓGICOS
// ==================================================

// AND (&&) → true si ambas condiciones son true
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false

// OR (||) → true si al menos una condición es true
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true

// Combinación de operadores
console.log(5 > 10 && 15 > 20 || 30 < 40) // true

// NOT (!) → invierte el valor booleano
console.log(!true)  // false
console.log(!false) // true

console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 > 10 || 15 > 20)) // true

// ==================================================
// OPERADOR TERNARIO
// ==================================================
//
// Es una forma corta de escribir un if/else
//
// condición ? expresión_si_true : expresión_si_false

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")