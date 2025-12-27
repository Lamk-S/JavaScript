// ==================================================
// EJERCICIO 6
// Crea una clase que haga uso de herencia
// ==================================================

// --------------------------------------------------
// Clase base
// --------------------------------------------------

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca} - Modelo: ${this.modelo} (${this.año})`)
    }
}

// --------------------------------------------------
// Clase hija: Coche
// --------------------------------------------------

class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año)
        this.puertas = puertas
    }

    mostrarPuertas() {
        console.log("Número de puertas:", this.puertas)
    }
}

// --------------------------------------------------
// Clase hija: Motocicleta
// --------------------------------------------------

class Motocicleta extends Vehiculo {
    constructor (marca, modelo, año, tipoMotor) {
        super(marca, modelo, año)
        this.tipoMotor = tipoMotor
    }

    mostrarTipoMotor() {
        console.log("Tipo de motor:", this.tipoMotor)
    }
}

// --------------------------------------------------
// Creación de instancias
// --------------------------------------------------

let coche = new Coche("Toyota", "Corolla", 2020, 4)
let motocicleta = new Motocicleta("Harley-Davidson", "Iron 883", 2023, "V-TWIN")

coche.mostrarInfo()
coche.mostrarPuertas()

motocicleta.mostrarInfo()
motocicleta.mostrarTipoMotor()