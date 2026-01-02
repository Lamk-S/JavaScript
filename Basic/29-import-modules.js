/*
==========================================
IMPORTACIÓN DE MÓDULOS
==========================================
Para usar código exportado desde otro archivo,
utilizamos la palabra clave `import`.
*/

// ------------------------------------------
// Importación de exports nombrados
// ------------------------------------------

import { add, PI, name, Circle } from "./28-export-modules.js"

// ------------------------------------------
// Importación de export default
// ------------------------------------------

// El nombre puede ser cualquiera
import defaultImport from "./28-export-modules.js"

// ------------------------------------------
// Uso de funciones importadas
// ------------------------------------------

console.log(add(5, 10))

// ------------------------------------------
// Uso de propiedades importadas
// ------------------------------------------

console.log(PI)
console.log(name)

// ------------------------------------------
// Uso de clases importadas
// ------------------------------------------

let circle = new Circle(5)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// ------------------------------------------
// Uso del import por defecto
// ------------------------------------------

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// ------------------------------------------
// Importación desde otros directorios
// ------------------------------------------
// Ejemplo de importación modular más profunda

import { MyImport } from "./directory/file.js"