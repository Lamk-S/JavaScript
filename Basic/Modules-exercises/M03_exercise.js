// ==================================================
// EJERCICIO 3
// Exporta una clase
// ==================================================

// --------------------------------------------------
// Definición y exportación de la clase
// --------------------------------------------------

export class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  info() {
    return `Nombre: ${this.name}, Edad: ${this.age}`
  }
}