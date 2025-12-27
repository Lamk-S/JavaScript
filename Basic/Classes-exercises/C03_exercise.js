// ==================================================
// EJERCICIO 3
// Muestra los valores de las propiedades e invoca a
// la función
// ==================================================

// --------------------------------------------------
// Definición de la clase Vehiculo
// --------------------------------------------------

class Vehiculo {
    constructor (marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    mostrarInfo() {
        console.log("Marca:", this.marca, "-", "Modelo:", this.modelo)
    }
}

// --------------------------------------------------
// Creación de una instancia
// --------------------------------------------------

let vehiculo1 = new Vehiculo("Toyota", "Corolla")

console.log(vehiculo1)
vehiculo1.mostrarInfo()