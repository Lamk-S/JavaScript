# Curso de JavaScript

Repositorio personal dedicado al aprendizaje y práctica de JavaScript, desde fundamentos hasta conceptos avanzados. Contiene apuntes, teoría comentada y ejercicios resueltos organizados de forma progresiva.

Repositorio: https://github.com/Lamk-S/JavaScript

---

## Descripcion

Este repositorio documenta mi proceso de aprendizaje del lenguaje JavaScript. El enfoque es practico: cada concepto teorico (archivos `00-*.js` a `31-*.js`) tiene su correspondiente carpeta y archivo de ejercicios para reforzar lo aprendido.

El contenido esta dividido en dos niveles principales:

- **Basic:** Fundamentos del lenguaje, sintaxis, estructuras de datos y programacion orientada a objetos.
- **Intermediate:** Conceptos avanzados como funciones de orden superior, closures, currying, callbacks, recursividad y manejo avanzado de estructuras.

---

## Objetivo

1.  Consolidar las bases de JavaScript moderno (ES6+).
2.  Practicar logica de programacion con ejercicios graduados.
3.  Dominar conceptos intermedios y avanzados para desarrollo frontend y backend con Node.js.
4.  Mantener un registro ordenado y reutilizable como material de consulta.

---

## Tecnologias y herramientas

- **Lenguaje:** JavaScript (ES6+)
- **Entorno de ejecucion:** Node.js y navegador web
- **Modulos:** ES Modules (`type: module` en `package.json`) y CommonJS (`.cjs`)
- **Editor recomendado:** Visual Studio Code
- **Control de versiones:** Git y GitHub

---

## Estructura del repositorio

```
JavaScript/
|
├── Basic/
|   ├── 00-helloWorld.js
|   ├── 01-variables.js
|   ├── 02-datatypes.js
|   ├── 03-beginner-exercises.js
|   ├── 04-operators.js
|   ├── 05-operator-exercises.js
|   ├── 06-strings.js
|   ├── 07-string-exercises.js
|   ├── 08-conditionals.js
|   ├── 09-conditionals-exercises.js
|   ├── 10-array.js
|   ├── 11-set.js
|   ├── 12-map.js
|   ├── 13-structures-exercises.js
|   ├── 14-loops.js
|   ├── 15-loops-exercises.js
|   ├── 16-functions.js
|   ├── 17-functions-exercises.js
|   ├── 18-objects.js
|   ├── 19-objects-exercises.js
|   ├── 20-destructuring-spreading.js
|   ├── 21-destructuring-spreading-exercises.js
|   ├── 22-classes.js
|   ├── 23-classes-exercises.js
|   ├── 24-error-handling.js
|   ├── 25-error-handling-exercises.js
|   ├── 26-console-methods.js
|   ├── 27-console-methods-exercises.js
|   ├── 28-export-modules.js
|   ├── 29-import-modules.js
|   ├── 30-import-external-modules.cjs
|   ├── 31-modules-exercises.js
|   ├── Beginner-exercises/
|   ├── Operator-exercises/
|   ├── String-exercises/
|   ├── Conditionals-exercises/
|   ├── Structures-exercises/
|   ├── Loops-exercises/
|   ├── Functions-exercises/
|   ├── Objects-exercises/
|   ├── Destructuring-spreading-exercises/
|   ├── Classes-exercises/
|   ├── Error-handling-exercises/
|   ├── Console-methods-exercises/
|   └── Modules-exercises/
|
├── Intermediate/
|   ├── 00-advanced-functions.js
|   ├── 01-advanced-functions-exercises.js
|   ├── 02-advanced-structures.js
|   └── Advanced-functions-exercises/
|       ├── AD01_exercise.js
|       ├── AD02_exercise.js
|       ├── AD03_exercise.js
|       ├── AD04_exercise.js
|       ├── AD05_exercise.js
|       ├── AD06_exercise.js
|       ├── AD07_exercise.js
|       ├── AD08_exercise.js
|       ├── AD09_exercise.js
|       └── AD10_exercise.js
|
├── package.json
└── README.md
```

---

## Contenido detallado

### 1. Basic - Fundamentos

| Archivo | Tema |
| :--- | :--- |
| `00-helloWorld.js` | Primer contacto con el lenguaje |
| `01-variables.js`, `02-datatypes.js` | Variables, constantes y tipos de datos |
| `04-operators.js` | Operadores aritmeticos, logicos y de comparacion |
| `06-strings.js` | Manipulacion de cadenas |
| `08-conditionals.js` | Condicionales: if, else, switch, ternario |
| `10-array.js`, `11-set.js`, `12-map.js` | Estructuras de datos principales |
| `14-loops.js` | Bucles: for, while, for...of, for...in |
| `16-functions.js` | Declaracion, expresion y arrow functions |
| `18-objects.js` | Objetos literales y prototipos |
| `20-destructuring-spreading.js` | Destructuring y spread operator |
| `22-classes.js` | Clases, herencia y POO en JS |
| `24-error-handling.js` | try, catch, finally y errores personalizados |
| `26-console-methods.js` | Metodos de consola para debugging |
| `28, 29, 30-modules` | Exportacion e importacion de modulos nativos y externos |

Cada archivo teorico tiene su version `*-exercises.js` y su carpeta correspondiente con practicas adicionales.

### 2. Intermediate - Funciones Avanzadas

Ubicado en `Intermediate/Advanced-functions-exercises/`, esta seccion profundiza en patrones avanzados de programacion funcional:

- **AD01 - Funcion que retorna otra funcion:** Validador reutilizable con closure (`createMinLengthValidator`).
- **AD02 - Currying:** Funcion currificada para calcular `precioBase * impuesto * descuento`.
- **AD03 - Recursividad:** Calculo de potencia `base^exponente` con caso base.
- **AD04 - Closure con estado privado:** `createCounter()` con metodos `increment()`, `decrement()` y `getValue()`.
- **AD05 - Rest parameters:** `sumManyTimes(multiplier, ...numbers)` que suma y luego multiplica.
- **AD06 - Callbacks:** `sumAndExecute(callback, ...numbers)` con ejecucion diferida del resultado.
- **AD07 - Funciones parciales:** Aplicacion de descuentos fijando un parametro.
- **AD08 - Spread operator:** Gestion inmutable de carritos, argumentos y objetos.
- **AD09 - Retorno implicito:** Comparativa entre funcion tradicional y arrow function.
- **AD10 - This lexico:** Manejo del contexto `this` en funciones asincronas con `setTimeout`.

---

## Como ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Lamk-S/JavaScript.git
cd JavaScript
```

### 2. Requisitos previos

- Navegador web moderno (Chrome, Firefox, Edge)
- Node.js v18 o superior (recomendado para modulos ES)
- Editor de codigo como Visual Studio Code

## Roadmap de aprendizaje

1.  Fundamentos: variables, tipos y operadores
2.  Cadenas y estructuras (Array, Set, Map)
3.  Logica de control (condicionales y bucles)
4.  Funciones y objetos
5.  Conceptos modernos (destructuring, spreading, clases, modulos)
6.  Manejo de errores y debugging
7.  Nivel intermedio: closures, currying, recursividad y patrones funcionales

---

## Buenas practicas aplicadas en el repositorio

- Codigo comentado por secciones (variables, logica, uso)
- Uso de ES Modules y separacion entre teoria y ejercicio
- Funciones puras y reutilizables
- Manejo de estado privado mediante closures
- Codigo limpio, legible y con nombres descriptivos

---

## Contribucion

Este es un repositorio de aprendizaje personal, pero si encuentras una mejora o una forma mas eficiente de resolver un ejercicio, siéntete libre de abrir un Issue o un Pull Request.

---

## Autor

**Melvin López (Lamk-S)**
GitHub: https://github.com/Lamk-S

---

## Licencia

Este proyecto se distribuye bajo licencia MIT. Puedes usar el codigo como referencia para tu propio aprendizaje.

---

## Estado actual

Proyecto en desarrollo activo.
