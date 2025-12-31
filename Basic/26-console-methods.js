/*
==========================================
CONSOLE METHODS (Métodos de la consola)
==========================================

La consola es una herramienta fundamental para:
- Depurar código
- Mostrar información durante la ejecución
- Analizar errores y advertencias
*/

// ------------------------------------------
// console.log()
// ------------------------------------------
// Muestra mensajes informativos en la consola

console.log("Hola, JavaScript!")

// ------------------------------------------
// console.error()
// ------------------------------------------
// Muestra mensajes de error
// Normalmente se muestran en color rojo

console.error("Este es un mensaje de error.")
console.error(
  "Error al conectarse a la base de datos",
  new Error("Conexión fallida.")
)

// ------------------------------------------
// console.warn()
// ------------------------------------------
// Muestra advertencias (warnings)

console.warn("Este es un mensaje de advertencia")

// ------------------------------------------
// console.info()
// ------------------------------------------
// Muestra información adicional

console.info("Este es un mensaje de información adicional")

// ------------------------------------------
// console.table()
// ------------------------------------------
// Muestra datos en formato de tabla
// Ideal para arrays u objetos

let data = [
  ["Lamk", 24],
  ["Tomoe", 21],
  ["Cheys", 25]
]

console.table(data)

// ------------------------------------------
// console.group() / console.groupEnd()
// ------------------------------------------
// Agrupa mensajes relacionados en la consola

console.group("Usuario")
console.log("Nombre: Lamk")
console.log("Edad: 24")
console.groupEnd()

// ------------------------------------------
// console.time() / console.timeEnd()
// ------------------------------------------
// Permite medir el tiempo de ejecución de un bloque de código

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 1000; i++) {
  // Simulación de proceso
}

console.timeEnd("Tiempo de ejecución 1")

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 1000; i++) {
  // Simulación de otro proceso
}

console.timeEnd("Tiempo de ejecución 2")

// ------------------------------------------
// console.assert()
// ------------------------------------------
// Muestra un error si la condición es falsa

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// ------------------------------------------
// console.count() / console.countReset()
// ------------------------------------------
// Cuenta cuántas veces se ejecuta una etiqueta

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// ------------------------------------------
// console.trace()
// ------------------------------------------
// Muestra la traza de llamadas (call stack)

function funA() {
  funB()
}

function funB() {
  console.trace("Seguimiento de la ejecución")
}

funA()

// ------------------------------------------
// console.clear()
// ------------------------------------------
// Limpia la consola (comentado para evitar borrado automático)

// console.clear()