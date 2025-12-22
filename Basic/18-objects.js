/*
====================================================
OBJETOS EN JAVASCRIPT
====================================================

Un objeto es una estructura de datos que permite
almacenar información en pares clave–valor.
*/

// ==================================================
// Declaración de un objeto
// ==================================================

let person = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S"
}

console.log(person)

// ==================================================
// Acceso a propiedades
// ==================================================


// --------------------------------------------------
// Notación punto
// --------------------------------------------------

console.log(person.name)

// --------------------------------------------------
// Notación de corchetes
// --------------------------------------------------

// Útil cuando la clave es dinámica o contiene espacios
console.log(person["name"])

// ==================================================
// Modificación de propiedades
// ==================================================

// Modificar un valor existente
person.name = "Lamk Sines"
console.log(person.name)

// JavaScript permite cambiar el tipo de dato
console.log(typeof person.age)
person.age = "24"
console.log(person.age)
console.log(typeof person.age)

// ==================================================
// Eliminación de propiedades
// ==================================================

// delete elimina una propiedad del objeto
delete person.age
console.log(person)

// ==================================================
// Creación de nuevas propiedades
// ==================================================

// Se pueden agregar propiedades en cualquier momento
person.email = "kunlancelot@gmail.com"
person["age"] = 24

console.log(person)

// ==================================================
// Métodos en objetos
// ==================================================

// Un método es una función dentro de un objeto
let person2 = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S",
    walk: function() {
        console.log("La persona camina")
    }
}

// Llamada al método
person2.walk()

// ==================================================
// Objetos anidados
// ==================================================

let person3 = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 3,
        work: function() {
            // this hace referencia al objeto actual (job)
            console.log(`La persona de ${this.exp} años de experiencia, trabaja`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// ==================================================
// Comparación de objetos
// ==================================================

let person4 = {
    name: "Lamk Sines",
    alias: "@Lamk-S",
    email: "kunlancelot@gmail.com",
    age: 24
}

console.log(person)
console.log(person4)

// Los objetos se comparan por referencia, no por valor
console.log(person == person4)   // false
console.log(person === person4)  // false

// Comparación de propiedades individuales
console.log(person.name == person4.name) // true

// ==================================================
// Iteración de propiedades
// ==================================================

// for...in recorre las claves del objeto
for (let value in person) {
    console.log(value)
}

// Acceso a clave y valor
for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// ==================================================
// Funciones constructoras
// ==================================================

// Antes se usaban funciones constructoras
// Actualmente se recomienda usar clases
function Person(name, age) {
    this.name = name
    this.age = age
}

let person5 = new Person("Lamk", 24)

console.log(person5)
console.log(person5.name)

// --------------------------------------------------
// Tipo de dato
// --------------------------------------------------

console.log(typeof person5) // object
console.log(typeof person4) // object