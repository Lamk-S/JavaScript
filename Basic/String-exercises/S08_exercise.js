// ==================================================
// EJERCICIO 8
// Comprueba si una cadena de texto contiene
// una palabra concreta
// ==================================================

// Declaramos una variable de tipo string
const myVariable = "Bienvenido al curso de JavaScript."

// Palabra a buscar dentro del string
const word = "curso"

// Usamos includes() para verificar si el string contiene la palabra
myVariable.includes(word) 
    ? console.log(`Si contiene la parabra "${word}"`) 
    : console.log(`No contiene la parabra "${word}"`)