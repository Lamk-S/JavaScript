// ==================================================
// EJERCICIO 2
// Imprime por consola un mensaje si el usuario y
// contraseña concide con unos establecidos
// ==================================================

// Credenciales ingresadas por el usuario
let user = "admin";
let password = "password";

// Credenciales válidas del sistema
const VALID_USER = "admin";
const VALID_PASSWORD = "password";

// Verificación de credenciales
if (user === VALID_USER && password === VALID_PASSWORD) {
  console.log(`Las credenciales son válidas.
Bienvenido ${user}!`);
} else {
  console.log("Usuario o contraseña incorrectos.");
}