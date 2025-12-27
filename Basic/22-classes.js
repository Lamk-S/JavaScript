/*
====================================================
CLASSES EN JAVASCRIPT
====================================================

Las clases en JavaScript son una plantilla (template)
que permite crear objetos con propiedades y métodos
predefinidos.
*/

// ==================================================
// Declaración de una clase
// ==================================================

class Person {
    constructor (name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}


// ==================================================
// Creación de instancias (objetos)
// ==================================================

let person = new Person("Lamk", 24, "@Lamk-S")
let person2 = new Person("Lamk", 24, "@Lamk-S")

console.log(person)
console.log(person2)


// typeof devuelve "object" porque las instancias
// de clases son objetos
console.log(typeof person)

// ==================================================
// Valores por defecto en el constructor
// ==================================================

class DefaultPerson {
    constructor (name = "Nombre por defecto", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Si no se envían todos los parámetros,
// se usan los valores por defecto
let person3 = new DefaultPerson("Lamk")

console.log(person3)

// ==================================================
// Acceso y modificación de propiedades
// ==================================================

// Acceso mediante notación de punto
console.log(person3.alias)

// Acceso mediante notación de corchetes
console.log(person3["alias"])

// Modificación de una propiedad
person3.alias = "LamkDev"
console.log(person3.alias)

// ==================================================
// Métodos dentro de una clase
// ==================================================

class PersonWithMethod {
    constructor (name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }
}

let person4 = new PersonWithMethod("Lamk", 24, "LamkDev")
person4.walk()

// ==================================================
// Propiedades privadas
// ==================================================s

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        // Acceso permitido a la propiedad privada
        console.log("Pagando desde la cuenta:", this.#bank)
    }
}

let person5 = new PrivatePerson("Lamk", 24, "LamkDev", "LAMK123456789")


// Esto genera undefined o error (según el entorno)
console.log(person5.bank)

// No se puede modificar directamente
person5.bank = "NEW123456789#"

console.log(person5)
console.log(person5.pay())

// ==================================================
// Getters y Setters
// ==================================================

/*
Los getters permiten obtener valores privados
Los setters permiten modificarlos de forma controlada
*/

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    // Getter
    get name() {
        return this.#name
    }

    // Setter
    set bank(bank) {
        this.#bank = bank
    }
}

let person6 = new GetSetPerson("Lamk", 24, "LamkDev", "LAMK123456789")

// Acceso mediante getter
console.log(person6.name)

// Modificación mediante setter
person6.bank = "new LAMK123456789"