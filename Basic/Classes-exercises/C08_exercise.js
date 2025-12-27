// ==================================================
// EJERCICIO 8
// Modifica la clase con getters y setters para que
// use propiedades privadas
// ==================================================

// --------------------------------------------------
// Definición de la clase Cliente
// --------------------------------------------------

class Producto {
    #nombre
    #precio
    #stock

    constructor(nombre, precio, stock) {
        this.#nombre = nombre
        this.#precio = precio
        this.#stock = stock
    }

    // Getter y Setter para nombre
    get nombre() {
        return this.#nombre
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }

    // Getter y Setter para precio
    get precio() {
        return this.#precio
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.#precio = nuevoPrecio
        } else {
            console.log("Precio inválido")
        }
    }

    // Getter y Setter para stock
    get stock() {
        return this.#stock
    }

    set stock(nuevoStock) {
        if (nuevoStock >= 0) {
            this.#stock = nuevoStock
        } else {
            console.log("Stock inválido")
        }
    }

    // Método para mostrar información
    mostrarInfo() {
        console.log(`Producto: ${this.#nombre} - Precio: $${this.#precio} - Stock: ${this.#stock}`)
    }
}