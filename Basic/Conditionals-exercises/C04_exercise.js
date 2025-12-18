// ==================================================
// EJERCICIO 4
// Verifica si una persona puede votar o no
// (mayor o igual a 18) e indica cuántos años
// le faltan
// ==================================================

// Edad a evaluar
let age = 16;

// Edad mínima para votar
const MIN_VOTING_AGE = 18;

if (age >= MIN_VOTING_AGE) {
  console.log(`Edad: ${age} - Sí puedes votar.`);
} else {
  const yearsRemaining = MIN_VOTING_AGE - age;
  console.log(`Edad: ${age} - Te faltan ${yearsRemaining} años para poder votar.`);
}