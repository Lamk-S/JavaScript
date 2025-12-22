// ==================================================
// EJERCICIO 6
// Crea una función que reciba dos arrays y devuelva
// un nuevo array que contenga los elementos comunes
// entre ambos
// ==================================================

const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [4, 5, 6, 7, 8, 9]

// --------------------------------------------------
// Solución usando Function Declaration
// --------------------------------------------------

function compareArrays(arr1, arr2) {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArray.push(arr1[i])
                break
            }
        }
    }
    return newArray
}

console.log("Nuevo array (function):", compareArrays(array1, array2))

// --------------------------------------------------
// Solución usando Function Expression
// --------------------------------------------------

const compareArrays2 = function (arr1, arr2) {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArray.push(arr1[i])
                break
            }
        }
    }
    return newArray
}

console.log("Nuevo array (expression):", compareArrays2(array1, array2))

// --------------------------------------------------
// Solución usando Arrow Function
// --------------------------------------------------

const compareArrays3 = (arr1, arr2) => {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArray.push(arr1[i])
                break
            }
        }
    }
    return newArray
}

console.log("Nuevo array (arrow):", compareArrays3(array1, array2))

// --------------------------------------------------
// Solución usando forEach (menos eficiente)
// --------------------------------------------------

function compareArraysForEach(arr1, arr2) {
    let newArray = []
    const set2 = new Set(arr2) // convertimos arr2 en Set para búsqueda rápida

    arr1.forEach(function (valor1) {
        if (set2.has(valor1)) {
            newArray.push(valor1)
        }
    })

    return newArray
}

console.log("Nuevo array (forEach):", compareArraysForEach(array1, array2))