// ==================================================
// EJERCICIO 3
// Crea una función que utilice info correctamente
// ==================================================

/*
La función muestra información sobre la validación de edad.
console.info se usa para comunicar el estado del proceso.
*/

function validarEdad(age) {
  console.info("Iniciando validación de edad...")

  if (typeof age !== "number") {
    console.error("Error: la edad debe ser un número entero")
    return
  }

  if (age < 0) {
    console.error("Error: la edad no puede ser negativa")
    return
  }

  if (age < 18) {
    console.warn("Advertencia: el usuario es menor de edad")
    return
  }

  console.info("Validación completada")
  console.log("Usuario mayor de edad")
}

// Pruebas
validarEdad(16)
validarEdad(21)