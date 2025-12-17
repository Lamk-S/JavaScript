// =======================================
//       CONDICIONALES EN JAVASCRIPT
// =======================================
/* Las estructuras condicionales permiten
ejecutar diferentes bloques de código
dependiendo de si una condición se cumple
o no. */

// -------------------------------------
// Variables de ejemplo
// -------------------------------------

let age = 24;

// -------------------------------------
// IF
// -------------------------------------
/* La estructura if se ejecuta solo si
la condición es verdadera (true). */

if (age === 24) {
    console.log(`Tu edad es de ${age} años`);
}

// -------------------------------------
// IF / ELSE
// -------------------------------------
/* Se utiliza cuando queremos ejecutar
una acción si se cumple la condición
y otra si no se cumple. */

if (age >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Aún eres menor de edad");
}

// -------------------------------------
// IF / ELSE IF / ELSE
// -------------------------------------
/* Permite evaluar múltiples condiciones
en orden. Se ejecuta el primer bloque
que sea verdadero. */

if (age === 24) {
    console.log("Tu edad es", age);
} else if (age < 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Tu edad no es 24 ni eres menor de edad");
}

// -------------------------------------
// OPERADOR TERNARIO
// -------------------------------------
/* Es una forma corta de escribir un if / else.
Sintaxis:
condición ? valor_si_true : valor_si_false */

const message = age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(message)

// -------------------------------------
// SWITCH
// -------------------------------------
/* La estructura switch se usa cuando
una variable puede tener varios valores
posibles. */

let day = 2;
let dayName;

switch (day) {
    case 0:
        dayName = "Lunes";
        break;
    case 1:
        dayName = "Martes";
        break;
    case 2:
        dayName = "Miércoles";
        break;
    case 3:
        dayName = "Jueves";
        break;
    case 4:
        dayName = "Viernes";
        break;
    case 5:
        dayName = "Sábado";
        break;
    case 6:
        dayName = "Domingo";
        break;
    default:
        dayName = "Número de día incorrecto";
}

console.log(dayName);