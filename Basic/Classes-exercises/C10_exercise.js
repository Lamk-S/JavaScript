// ==================================================
// EJERCICIO 10
// Sobrescribe un método de una clase que utilice
// herencia 
// ==================================================

// --------------------------------------------------
// Clase padre
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
// Clase hija: Coche con método sobrescrito
// --------------------------------------------------

class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año)
        this.puertas = puertas
    }

    // Sobrescribimos el método mostrarInfo
    mostrarInfo() {
        console.log(`Coche: ${this.marca} ${this.modelo} (${this.año}) - Puertas: ${this.puertas}`)
    }
}

// --------------------------------------------------
// Clase hija: Motocicleta (sin sobrescribir)
// --------------------------------------------------

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, tipoMotor) {
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

// Uso de los métodos
coche.mostrarInfo()          // Usa el método sobrescrito
motocicleta.mostrarInfo()    // Usa el método original de la clase base
motocicleta.mostrarTipoMotor()