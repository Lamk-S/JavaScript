// ==================================================
// EJERCICIO 9
// Crea una función que reciba una cadena de texto
// y devuelva la misma cadena con las palabras en
// orden inverso
// ==================================================

let text = "Bienvenido al mundo de JavaScript"

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function reverseWords(str) {
    let words = str.split(" ") // Convertimos la cadena en array de palabras
    console.log(words)
    words.reverse()            // Invertimos el array
    console.log(words)
    return words.join(" ")     // Unimos las palabras en un string
}

console.log("Cadena invertida (function):", reverseWords(text))

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const reverseWords2 = function (str) {
    let words = str.split(" ")
    words.reverse()
    return words.join(" ")
}

console.log("Cadena invertida (expression):", reverseWords2(text))

// --------------------------------------------------
// Solución usando Arrow Function
// --------------------------------------------------

const reverseWords3 = (str) => {
    let words = str.split(" ")
    words.reverse()
    return words.join(" ")
}

console.log("Cadena invertida (arrow):", reverseWords3(text))