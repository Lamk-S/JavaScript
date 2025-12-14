// ==================================================
// EJERCICIO 2
// Crea una variable para cada tipo de operación de
// asignación, que haga uso de las variables 
// utilizadas para las operaciones aritméticas
// ==================================================

let num1 = 10
let num2 = 3
let addition = num1 + num2
let subtraction = num1 -num2
let multiplication = num1 * num2
let division = num1 / num2


// --------------------------------------------------
// Operador += (suma y asigna)
let assignAddition = addition
assignAddition += 5
console.log("Asignación += :", assignAddition)

// Operador -= (resta y asigna)
let assignSubtraction = subtraction
assignSubtraction -= 2
console.log("Asignación -= :", assignSubtraction)

// Operador *= (multiplicación y asigna)
let assignMultiplication = multiplication
assignMultiplication *= 2
console.log("Asignación *= :", assignMultiplication)

// Operador /= (división y asigna)
let assignDivision = division
assignDivision /= 2
console.log("Asignación /= :", assignDivision)

// Operador /= (módulo y asigna)
let assignModulus = addition
assignModulus %= 5
console.log("Asignación %= :", assignModulus)

// Operador **= (exponente y asigna)
let assignExponentiation = num2
assignExponentiation **= 3
console.log("Asignación **= :", assignExponentiation)