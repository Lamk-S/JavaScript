// ==================================================
// EJERCICIO 4
// Añade un método estático a la primera clase
// ==================================================

// --------------------------------------------------
// Definición de la clase Vehiculo
// --------------------------------------------------

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    mostrarInfo() {
        console.log("Marca:", this.marca, "-", "Modelo:", this.modelo)
    }

    static tipo() {
        console.log("Este método es estático y pertenece a la clase Vehiculo")
    }
}