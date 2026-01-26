// ==================================================
// EJERCICIO 10
// Haz uso del this léxico
// ==================================================

/*
Gestión del estado de un componente
(cargando / listo / error).

Situación diaria:
- Se hace una petición
- Se actualiza el estado
- Se renderiza según el resultado
*/

// --------------------------------------------------
// Objeto controlador de estado
// --------------------------------------------------

const uiController = {
    status: "idle",

    fetchData() {
        this.status = "loading"
        console.log(`Estado: ${this.status}`)

        /*
        Simulación de petición asíncrona
        */
        setTimeout(() => {
            // this sigue siendo uiController
            this.status = "success"
            console.log(`Estado: ${this.status}`)

        }, 1000)
    }
}

// --------------------------------------------------
// Uso
// --------------------------------------------------

uiController.fetchData()

