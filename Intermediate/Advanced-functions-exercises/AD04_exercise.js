// ==================================================
// EJERCICIO 4
// Crea una función createCounter() que reciba un
// valor inicial y retorne un objeto con métodos para
// increment(), decrement() y getValue(), utilizando
// un closure para mantener el estado
// ==================================================


// --------------------------------------------------
// Función creadora del contador
// --------------------------------------------------

function createCounter(valorInicial) {
    // Estado PRIVADO
    // Solo las funciones internas pueden acceder
    let value = valorInicial
    
    /*
    Se retorna un objeto con métodos.
    Estos métodos forman un closure y
    "recuerdan" la variable value.
    */
    return {
        // Incrementa el valor en 1
        increment() {
            value++
            console.log(`Valor actual: ${value}`)
        },

        // Decrementa el valor en 1
        decrement() {
            value--
            console.log(`Valor actual: ${value}`)
        },

        // Devuelve el valor sin modificarlo
        getValue() {
            return value
        }
    }
}

// --------------------------------------------------
// Uso del contador
// --------------------------------------------------

// Se crea una instancia del contador
const counter = createCounter(15)

// Modificación del estado
counter.increment()
counter.increment()
counter.increment()

counter.decrement()
counter.decrement()

// Lectura del estado
console.log(counter.getValue())