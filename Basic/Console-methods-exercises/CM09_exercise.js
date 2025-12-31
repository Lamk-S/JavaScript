// ==================================================
// EJERCICIO 9
// Utiliza trace
// ==================================================

/*
Este ejercicio simula el flujo de una compra:
seleccionar producto → agregar al carrito
→ procesar pago → confirmar pedido.
console.trace muestra la cadena completa de
llamadas hasta la función actual.
*/

function seleccionarProducto(producto) {
    console.log(`Producto seleccionado: ${producto}`)
    agregarAlCarrito(producto)
}

function agregarAlCarrito(producto) {
    console.log(`Agregando ${producto} al carrito`)
    procesarPago(producto)
}

function procesarPago(producto) {
    console.log(`Procesando pago para: ${producto}`)
    confirmarPedido(producto)
}


function confirmarPedido(producto) {
    console.log(`Pedido confirmado para: ${producto}`)
    // Aquí usamos trace para ver el flujo completo
    console.trace("Traza del flujo de compra")
}

// Simulación de compra
seleccionarProducto("Laptop")