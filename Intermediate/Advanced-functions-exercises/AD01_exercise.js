// ==================================================
// EJERCICIO 1
// Crea una función que retorne a otra función
// ==================================================

/*
Validación reutilizable de datos de entrada.

Objetivo:
    - Definir una regla una sola vez
    - Reutilizar la función validadora en distintos lugares
*/ 

// --------------------------------------------------
// Función que retorna otra función
// --------------------------------------------------

function createMinLengthValidator(minLength) {

    /*
    La función retornada valida cualquier texto
    usando la longitud mínima configurada.
    */
    return function validate(text) {
        return text.length >= minLength
    }
}

// --------------------------------------------------
// Uso real
// --------------------------------------------------

// Se crean validadores especializados
const validatePassword = createMinLengthValidator(8)
const validateUsername = createMinLengthValidator(4)

// Se reutiliza la función retornada
console.log(validatePassword("12345678"))   // true
console.log(validatePassword("1234"))       // false

console.log(validateUsername("Lamk"))        // true
console.log(validateUsername("JS"))          // false

/*
--------------------------------------------------
QUÉ SE CUMPLE AQUÍ
--------------------------------------------------
    - createMinLengthValidator retorna una función
    - La regla (minLength) queda encapsulada
    - Cada validador es independiente
    - Código claro y reutilizable
*/