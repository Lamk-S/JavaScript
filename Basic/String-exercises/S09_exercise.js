// ==================================================
// EJERCICIO 9
// Comprueba si dos strings son iguales
// ==================================================

// Declaramos dos variables de tipo string
const string1 = "JavaScript"
const string2 = "javascript"

// Comparamos los strings usando === (comparación estricta)
string1 === string2 
    ? console.log("Los strings son iguales") 
    : console.log("Los strings son diferentes")

// La comparación estricta distingue mayúsculas de minúsculas
// Para ignorar mayúsculas/minúsculas, podemos usar toLowerCase()
string1.toLowerCase() === string2.toLowerCase()
    ? console.log("Los strings son iguales") 
    : console.log("Los strings son diferentes")