// ==================================================
// EJERCICIO 8
// Implementa un ejemplo que haga uso de Spread
// ==================================================

/*
Gestión de una lista de productos en un carrito
de compras.
*/

// --------------------------------------------------
// Datos iniciales
// --------------------------------------------------

const cart = ["Laptop", "Mouse", "Keyboard"]

// --------------------------------------------------
// Agregar productos sin modificar el array original
// --------------------------------------------------

const updatedCart = [...cart, "Monitor", "Headset"]

console.log("Carrito original:", cart)
console.log("Carrito actualizado:", updatedCart)

// --------------------------------------------------
// Spread en llamadas a funciones
// --------------------------------------------------

function calculateTotal(a, b, c) {
    return a + b + c
}

const prices = [300, 50, 80]

console.log("Total:", calculateTotal(...prices))

// --------------------------------------------------
// Spread en objetos
// --------------------------------------------------

const user = {
    name: "Lamk",
    role: "admin"
}

const userWithPermissions = {
    ...user,
    permissions: ["create", "update", "delete"]
}

console.log(userWithPermissions)