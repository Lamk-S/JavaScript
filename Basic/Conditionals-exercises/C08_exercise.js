// ==================================================
// EJERCICIO 8
// Usa un switch para imprimir un mensaje de saludo
// diferente dependiendo del idioma
// ==================================================

// Idioma seleccionado
let language = "Inglés";

// Evaluación del idioma
switch (language) {
  case "Español":
    console.log("¡Hola! ¡Qué gusto saludarte!");
    break;
  case "Inglés":
    console.log("Hello! Nice to meet you!");
    break;
  case "Francés":
    console.log("Bonjour! Ravi de vous rencontrer!");
    break;
  case "Alemán":
    console.log("Hallo! Schön, dich zu treffen!");
    break;
  default:
    console.log("Idioma no soportado.");
}