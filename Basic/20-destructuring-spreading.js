/*
====================================================
DESESTRUCTURACIÓN Y SPREAD OPERATOR EN JAVASCRIPT
====================================================

- La desestructuración permite extraer valores de arrays
u objetos y asignarlos a variables de forma rápida
y legible.
- El operador spread (...) permite copiar, combinar
o expandir estructuras como arrays u objetos.
*/

// ==================================================
// Datos de ejemplo
// ==================================================

let myArray = [1, 2, 3, 4]

let person = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S"
}

// ==================================================
// Acceso tradicional a valores
// ==================================================

// Acceso a un valor de un array por índice
let myValue = myArray[1]
console.log(myValue)

// Acceso a una propiedad de un objeto
let myName = person.name
console.log(myName)

// ==================================================
// Desestructuración de ARRAYS
// ==================================================

// --------------------------------------------------
// Sintaxis básica
// --------------------------------------------------

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) // undefined (no existe en el array)

// --------------------------------------------------
// Sintaxis de arrays con valores predeterminados
// --------------------------------------------------

let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) // 0

// --------------------------------------------------
// Ignorar elementos de un array
// --------------------------------------------------

// Se pueden omitir valores usando comas
let [myValue10, , , myValue13] = myArray

console.log(myValue10)
console.log(myValue13)

// ==================================================
// Desestructuración de OBJECTS
// ==================================================

// El orden NO importa, se basa en el nombre de la propiedad
let { age, name, alias } = person

console.log(name)
console.log(age)
console.log(alias)

// --------------------------------------------------
// sintaxis objexts con valores predeterminados
// --------------------------------------------------

// Si la propiedad no existe, se asigna el valor por defecto
let { name2, age2, alias2, email = "email@email.com" } = person

console.log(name2)  // undefined
console.log(age2)   // undefined
console.log(alias2) // undefined
console.log(email)

// --------------------------------------------------
// Renombrar variables al desestructurar
// --------------------------------------------------

// Muy útil para evitar conflictos de nombres
let { name: name3, age: age3, alias: alias3 } = person

console.log(name3)
console.log(age3)
console.log(alias3)

// ==================================================
// Desestructuración de OBJECTS anidados
// ==================================================

let person3 = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 3,
        work: function() {
            console.log(`La persona de ${this.exp} años de experiencia, trabaja`)
        }
    }
}

// Acceso a propiedades anidadas
let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// ==================================================
// SPREAD OPERATOR (...)
// ==================================================

// ==================================================
// Spread en ARRAYS
// ==================================================

// Agregar nuevos elementos a un array
let myArray2 = [...myArray, 5, 6]
console.log(myArray2)

// --------------------------------------------------
// Copiar arrays
// --------------------------------------------------

// Se crea una copia independiente del array original
let myArray3 = [...myArray]
console.log(myArray3)

// --------------------------------------------------
// Combinar arrays
// --------------------------------------------------

let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// ==================================================
// Spread en OBJECTS
// ==================================================

// Agregar o sobrescribir propiedades
let person4 = {...person, email: "kunlancelot@gmail.com"}
console.log(person4)

// --------------------------------------------------
// Copiar objects
// --------------------------------------------------

// Se crea una copia independiente del objeto original
let person5 = { ...person }
console.log(person5)