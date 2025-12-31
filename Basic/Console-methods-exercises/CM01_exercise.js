// ==================================================
// EJERCICIO 1
// Crea un función que utilice error correctamente
// ==================================================

/*
La función valida si un usuario ingresa una edad válida.
En caso de error, se muestra el mensaje usando console.error.
*/

function validarEdad(age) {
  // Validamos que el valor sea un número
  if (typeof age !== "number" || !Number.isInteger(age)) {
    console.error("Error: la edad debe ser un número entero")
    return
  }

  // Validamos que la edad sea válida
  if (age < 0) {
    console.error("Error: la edad no puede ser negativa")
    return
  }

  // Caso correcto
  console.log("Usuario con edad válida")
}

// Pruebas de la función
validarEdad("20")   // Error
validarEdad(-5)     // Error
validarEdad(25)     // Correcto