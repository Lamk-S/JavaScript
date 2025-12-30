// ==================================================
// EJERCICIO 2
// Captura una excepción utilizando try-catch y
// finally
// ==================================================

// Declaramos una variable sin inicializar
let myProduct

try {
    console.log(myProduct.stock)
} catch (error) {
    console.log("Se ha producido un error")
    console.log("Detalle del error:", error.message)
} finally {
    // Se ejecuta siempre, ocurra o no el error
    console.log("Fin del ejercicio: bloque finally ejecutado")
}