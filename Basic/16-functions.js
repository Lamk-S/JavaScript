/*
====================================================
FUNCIONES EN JAVASCRIPT
====================================================

Una función es un bloque de código reutilizable que
se ejecuta cuando es invocado (llamado).

*/

// ==================================================
// Declaración de una función
// ==================================================

function myFunction() {
  console.log("Hola, función!")
}

// Invocación de la función
myFunction()

// Ejecución múltiple usando un ciclo
for (let i = 0; i < 5; i++) {
    myFunction()
}

// ==================================================
// Funciones con parámetros
// ==================================================

function myFunctionWithParams(name) {
    console.log(`Hola, ${name}!`)
}

myFunctionWithParams("Lamk")

// ==================================================
// Funciones anónimas
// ==================================================

/*
Una función anónima es una función sin nombre.
Generalmente se asigna a una variable.
*/

const myFunction2 = function (name) {
    console.log(`Hola, ${name}!`)
}

myFunction2("@Lamk-S")

// ==================================================
// Arrow Functions (Funciones flecha)
// ==================================================

/*
Las arrow functions son una sintaxis más corta
para definir funciones.
*/

// Sintaxis completa
const myFunction3 = (name) => {
    console.log(`Hola, ${name}!`)
}

// Sintaxis simplificada (una sola línea)
const myFunction4 = (name) => console.log(`Hola, ${name}!`)

myFunction3("lamkdev")
myFunction4("lamkdev")

// ==================================================
// Parámetros y valores undefined
// ==================================================

function sum(a, b) {
    console.log(a + b)
}

// Si faltan parámetros, su valor será undefined (NaN)
sum(5, 10)
sum(5)
sum()

function defaaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// ==================================================
// Parámetros por defecto
// ==================================================

defaaultSum(5,10)
defaaultSum(5)
defaaultSum()
defaaultSum(b = 5)

// ==================================================
// Retorno de valores
// ==================================================

/*
La palabra clave return permite que una función
devuelva un valor
*/

function mult(a, b) {
    return a * b
}

console.log(mult(5, 10))

let result = mult(5, 10)
console.log(result)

// ==================================================
// Funciones anidadas (Nested Functions)
// ==================================================

/*
Una función puede estar definida dentro de otra.
La función interna solo es accesible dentro
de su propio scope.
*/

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función iterna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// ==================================================
// Funciones de orden superior (Higher-Order Functions)
// ==================================================

/*
Una función de orden superior es aquella que:
- Recibe una función como parámetro
- Retorna una función
*/

function applyFunction(func, param) {
    func(param)
}

applyFunction(myFunction4, "Función de orden superior")

// ==================================================
// forEach()
// ==================================================

/*
forEach() ejecuta una función por cada elemento
de una colección iterable
*/

// --------------------------------------------------
// forEach() en Arrays
// --------------------------------------------------

const myArray = [1, 2, 3, 4]

myArray.forEach(function (value) {
  console.log(value)
})

myArray.forEach((value) => console.log(value))

// --------------------------------------------------
// forEach() en Set
// --------------------------------------------------

const mySet = new Set([
  "Lamk",
  "Sinester",
  "lamkdev",
  24,
  true,
  "kunlancelot@gmail.com"
])

mySet.forEach((value) => console.log(value))

// --------------------------------------------------
// forEach() en Map
// --------------------------------------------------

const myMap = new Map([
  ["Name", "Lamk"],
  ["Email", "kunlancelot@gmail.com"],
  ["Age", 24]
])

myMap.forEach((value, key) => console.log(key, value))