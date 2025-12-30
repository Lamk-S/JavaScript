// ==================================================
// EJERCICIO 8
// Crea un bucle que intente transformar a float cada
// valor y capture y muestre los errores
// ==================================================

// ------------------------------------------
// Arreglo de valores a convertir
// ------------------------------------------

const valores = ["10.5", "3.14", "abc", null, undefined, "42px", ""];

// ------------------------------------------
// Bucle que intenta convertir cada valor a float
// ------------------------------------------

valores.forEach((valor) => {
    try {
        const numero = parseFloat(valor);

        if (isNaN(numero)) {
            // Lanzamos un error si no se puede convertir
            throw new Error(`No se puede convertir a número: "${valor}"`);
        }

        console.log(`Valor convertido correctamente: ${numero}`);
    } catch (error) {
        console.log("Se ha producido un error:", error.message);
    } finally {
        console.log(`Intento finalizado para el valor: "${valor}"`);
        console.log("-----------------------------");
    }
});
