// ==================================================
// EJERCICIO 2
// Añade un método a la clase que utilice las
// propiedades
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