/* 
Datos primitivos -> Son datos en los que fundamenta
nuestra interacción con el lenguaje, son datos 
básicos e inmutables y represetan un solo valor 
*/

// String cadena de texto
let nombre = 'Melvin López'
let alias = 'Lamk'
let email = 'kunlancelot@gmail.com'

// Números (number)
let age = 24 // Entero
let height = 1.69 // Decimales

// Boleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefined -> variable no definida / no tiene una valor concreto 
// fuera de undefined
let undefinedValue

// Null -> Indica que hay una ausencia de valor
// pero más adelante puede tomar un valor
let nullValue = null

// symbol -> Son valore únicos que pueden ser utilizados como 
// identificadores de propiedades
let mySymbol = Symbol("mysymbol")

// BigInt -> Tipo numérico que permite representar números enteros 
// tan grandes o pequeños, superando el límite de seguridad del 
// tipo number
let myBigInt = BigInt(87327321377427643273277327837974641079327)
let myBigInt2 = 87327321377427643273277327837974641079327n

// Mostramos los tipos de datos
console.log(typeof nombre)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)