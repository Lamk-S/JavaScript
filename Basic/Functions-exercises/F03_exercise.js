// ==================================================
// EJERCICIO 3
// Crea una función que reciba un string y devuelva
// el número de vocales que contiene
// ==================================================

let text = "Bienvenido al mundo de JavaScript!"
const vowels = "aeiou"

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function vowelCounter(string) {

    let counter = 0

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i].toLowerCase() === vowels[j]) {
                counter++
                break
            }
        }
    }

    return counter
}

console.log(`# vocales (function): ${vowelCounter(text)}`)


// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const vowelCounter2 = function (string) {

    let counter = 0

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i].toLowerCase() === vowels[j]) {
                counter++
                break
            }
        }
    }

    return counter
}

console.log(`# vocales (expression): ${vowelCounter2(text)}`)


// --------------------------------------------------
// Solución usando función anidada
// --------------------------------------------------

function main(string) {

    let counter = 0

    function vowelCounter3(str) {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if (str[i].toLowerCase() === vowels[j]) {
                    counter++
                    break
                }
            }
        }
        return counter
    }

    return vowelCounter3(string)
}

console.log(`# vocales (nested): ${main(text)}`)