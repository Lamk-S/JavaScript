// ==================================================
// EJERCICIO 5
// Haz uso del método estático
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

// --------------------------------------------------
// Llamada al método estático
// --------------------------------------------------

Vehiculo.tipo()