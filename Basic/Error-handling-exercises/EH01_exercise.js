// ==================================================
// EJERCICIO 1
// Captura una excepción utilizando try-catch 
// ==================================================

// Declaramos una variable sin inicializar
let myProduct

try {
    // Intentamos acceder a una propiedad
    // de un valor undefined
    console.log(myProduct.stock)
} catch (error) {
    // Se ejecuta cuando ocurre un error
    console.log("Se ha producido un error")
    console.log("Detalle del error:", error.message)
}