// ==================================================
// EJERCICIO 8
// Utiliza count
// ==================================================

/*
Este ejercicio simula que un usuario agrega productos
a un carrito de compras.
console.count cuenta lss veces que se agrega un producto.
*/

function addToCart(product) {
    console.count(`Producto agregado al carrito`)
    console.log(`Se agregó: ${product}`)
}

// Simulación de acciones del usuario
addToCart("Camiseta")
addToCart("Zapatos")
addToCart("Gorra")
addToCart("Camiseta")
addToCart("Mochila")