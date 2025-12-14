// ==================================================
// EJERCICIO 8
// Añade alguna negación (!)
// ==================================================

// Variables de ejemplo
let estaLloviendo = false
let tienePermiso = true

// Ejemplo 1: Negación simple
console.log("No está lloviendo:", !estaLloviendo) // true

// Ejemplo 2: Negación de una condición compuesta
console.log("No puede salir sin permiso:", !tienePermiso) // false

// Ejemplo 3: Combinando NOT con AND/OR
let edad = 15
let adultoAcompañante = false
console.log(
  "No puede conducir:",
  !(edad >= 18 && tienePermiso) || !adultoAcompañante
) // true
