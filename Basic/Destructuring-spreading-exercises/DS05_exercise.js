// ==================================================
// EJERCICIO 5
// Usa desestructuración para extraer dos propiedades
// de un objeto anidado
// ==================================================

// --------------------------------------------------
// Definición del objeto
// --------------------------------------------------

let person = {
    name: "Lamk",
    age: 24,
    alias: "@Lamk-S",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 3,
        work: function() {
            console.log(`La persona de ${this.exp} años de experiencia, trabaja`)
        }
    }
}

// --------------------------------------------------
// Desestructuración de objeto anidado
// --------------------------------------------------
let { name: myName, job: { name: jobName } } = person

console.log(myName)  // "Lamk"
console.log(jobName) // "Programador"