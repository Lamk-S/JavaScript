// ==================================================
// EJERCICIO 6
// Itera las propiedades del objeto
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

let myObject = {
    name: "Lamk",
    age: 24,
    email: "kunlancelot@gmail.com",
    greet: function () {
        console.log(`Hola, mucho gusto. Mi nombre es ${this.name}`)
    }
}

// --------------------------------------------------
// Iteración usando for...in (solo claves)
// --------------------------------------------------

for (const key in myObject) {
  console.log(key)
}

// --------------------------------------------------
// Iteración usando for...in (clave y valor)
// --------------------------------------------------

for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`)
}