// ==================================================
// EJERCICIO 4
// Crea una función que reciba un array de strings
// y devuelva un nuevo array con las strings en
// mayúsculas
// ==================================================

let strings = [
  "Don Quijote de la Mancha",
  "Cien años de soledad",
  "El Señor de los Anillos",
  "El Principito",
  "Los Ojos de mi Princesa"
]

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function convertUppercase(array) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase())
    }

    return newArray
}

console.log("Nuevo string (function):", convertUppercase(strings))

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const convertUppercase2 = function (array) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase())
    }

    return newArray
}

console.log("Nuevo string (expression):", convertUppercase2(strings))

// --------------------------------------------------
// Solución usando función anidada
// --------------------------------------------------

function main(array) {
    let newArray = []

    function convertUppercase3(arr) {
        for (let i = 0; i < arr.length; i++) {
            newArray.push(arr[i].toUpperCase())
        }

        return newArray
    }

    return convertUppercase3(array)
}

console.log("Nuevo string (nested):", main(strings))

// --------------------------------------------------
// Solución usando forEach()
// --------------------------------------------------

function convertUppercaseForEach(array) {

    let newArray = []

    array.forEach(function (valor) {
        newArray.push(valor.toUpperCase())
    })

    return newArray
}

console.log("Nuevo string (forEach):", convertUppercaseForEach(strings))