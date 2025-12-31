// ==================================================
// EJERCICIO 2
// Crea una función que utilice warn correctamente
// ==================================================

/*
La función valida si un usuario es mayor de edad.
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

  // Validamos mayoría de edad
  if (age < 18) {
    console.warn("Advertencia: el usuario es menor de edad")
    return
  }

  // Caso correcto
  console.log("Usuario mayor de edad")
}

// Pruebas de la función
validarEdad("20")   // Error
validarEdad(-5)     // Error
validarEdad(16)     // Warning
validarEdad(25)     // Correcto