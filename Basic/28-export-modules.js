/*
==========================================
EXPORTACIÓN DE MÓDULOS
==========================================
Un módulo permite dividir el código en archivos reutilizables.
Usamos la palabra clave `export` para compartir variables,
funciones o clases con otros archivos.
*/

// ------------------------------------------
// Exportación de funciones
// ------------------------------------------

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// ------------------------------------------
// Exportación de propiedades (const y let)
// ------------------------------------------

export const PI = 3.141592
export let name = "@Lamk-S"

// ------------------------------------------
// Exportación de clases
// ------------------------------------------

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

// ------------------------------------------
// Exportación por defecto (default export)
// ------------------------------------------
// Un archivo solo puede tener UN export default

export default function substract(a, b) {
    return a- b
}

// Ejemplo alternativo de export default con clases
// export default class MyClass {
//     func() {
//         console.log("Mi clase")
//     }
// }