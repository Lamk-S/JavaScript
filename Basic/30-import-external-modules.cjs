/*
==========================================
MÓDULOS EXTERNOS (CommonJS)
==========================================
Node.js permite usar módulos internos usando `require`.
Este archivo usa CommonJS (.cjs) en lugar de ES Modules.
*/

// ------------------------------------------
// Importación del módulo os
// ------------------------------------------

const os = require("os")

// ------------------------------------------
// Información del sistema operativo
// ------------------------------------------

// Plataforma del sistema operativo
console.log(os.platform())

// Arquitectura del sistema
console.log(os.arch())

// Memoria total del sistema (bytes)
console.log(os.totalmem())

// Memoria libre del sistema (bytes)
console.log(os.freemem())