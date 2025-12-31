// ==================================================
// EJERCICIO 10
// Utiliza clear
// ==================================================

/*
Simula una aplicación de chat. console.clear limpia
la consola antes de iniciar una nueva conversación,
evitando que se mezclen mensajes antiguos con los nuevos.
*/

function iniciarNuevaConversacion(usuario) {
    console.clear()
    console.log(`Nueva conversación iniciada con ${usuario}`)
}

// Mensajes anteriores simulados
console.log("Mensaje antiguo 1")
console.log("Mensaje antiguo 2")

// Iniciamos nueva conversación
iniciarNuevaConversacion("Tomoe")
console.log("Tomoe: Hola, ¿cómo estás?")
console.log("Tú: ¡Hola! Todo bien")