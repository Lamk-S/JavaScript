// ==================================================
// EJERCICIO 7
// Crea una clase que haga uso de getters y setters
// ==================================================

// --------------------------------------------------
// Definición de la clase Producto
// --------------------------------------------------

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    // Getter y Setter para nombre
    get nombreProducto() {
        return this.nombre
    }

    set nombreProducto(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    // Getter y Setter para precio
    get precioProducto() {
        return this.precio
    }

    set precioProducto(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.precio = nuevoPrecio
        } else {
            console.log("Precio inválido")
        }
    }

    // Getter y Setter para stock
    get stockProducto() {
        return this.stock
    }

    set stockProducto(nuevoStock) {
        if (nuevoStock >= 0) {
            this.stock = nuevoStock
        } else {
            console.log("Stock inválido")
        }
    }

    // Método para mostrar información
    mostrarInfo() {
        console.log(`Producto: ${this.nombre} - Precio: $${this.precio} - Stock: ${this.stock}`)
    }
}

// --------------------------------------------------
// Uso de la clase Producto
// --------------------------------------------------

let producto1 = new Producto("Laptop", 1200, 10)
producto1.mostrarInfo()

// Uso de getters y setters
producto1.nombreProducto = "Laptop Pro"   // Setter
producto1.precioProducto = 1500           // Setter
producto1.stockProducto = 8               // Setter

console.log(producto1.nombreProducto)     // Getter
console.log(producto1.precioProducto)    // Getter
console.log(producto1.stockProducto)     // Getter

producto1.mostrarInfo()