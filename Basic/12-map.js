/*
====================================================
MAPS EN JAVASCRIPT
====================================================

Un Map es una estructura de datos que permite almacenar
pares clave–valor. A diferencia de los objetos, las claves
pueden ser de cualquier tipo y se mantiene el orden de inserción.
*/

// ==================================================
// Declaración de un Map
// ==================================================

let myMap = new Map()

console.log(myMap)

// ==================================================
// Inicialización de un Map
// ==================================================

// Un Map se puede inicializar pasando un array de pares [key, value]
myMap = new Map([
  ["Name", "Lamk"],
  ["Email", "kunlancelot@gmail.com"],
  ["Age", 24]
])

console.log(myMap)

// ==================================================
// Métodos y propiedades de Map
// ==================================================

// --------------------------------------------------
// set()
// --------------------------------------------------

// set() agrega un nuevo par clave–valor o actualiza uno existente
myMap.set("Alias", "Lamk-S")
myMap.set("Name", "Melvin López") // Actualiza el valor existente

console.log(myMap)

// --------------------------------------------------
// get()
// --------------------------------------------------

// get() devuelve el valor asociado a una clave
// Si la clave no existe, devuelve undefined
console.log(myMap.get("Name"))
console.log(myMap.get("Surname"))

// --------------------------------------------------
// has()
// --------------------------------------------------

// has() verifica si una clave existe dentro del Map
// Devuelve true o false
console.log(myMap.has("Surname"))
console.log(myMap.has("Age"))

// --------------------------------------------------
// delete()
// --------------------------------------------------

// delete() elimina un par clave–valor usando su clave
myMap.delete("Email")
console.log(myMap)

// --------------------------------------------------
// keys(), values() y entries()
// --------------------------------------------------

// keys() devuelve un iterador con las claves
// values() devuelve un iterador con los valores
// entries() devuelve un iterador con los pares [key, value]
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// --------------------------------------------------
// size
// --------------------------------------------------

// size devuelve la cantidad de elementos del Map
console.log(myMap.size)

// --------------------------------------------------
// clear()
// --------------------------------------------------

// clear() elimina todos los elementos del Map
myMap.clear()
console.log(myMap)