# 📚DEFINICIONES

**📌 Variable**

* Es un **contenedor** que almacena un valor que puede cambiar durante la ejecución del programa.
* Se declara con **let** (puede cambiar) o **var** (antiguo y no recomendado).
* **let edad = 30;** → Aquí, **edad** es una variable.

---

**📌 Constante**

* Es un contenedor cuyo valor **no puede cambiar** después de ser asignado.
* Se declara con **const**.
* Es ideal para valores que no deben modificarse.
* **const PI = 3.1416;** → Aquí, **PI** es una constante.

---

**📌  Objeto**

* **Es una ** **estructura que agrupa propiedades y métodos** **.**
* Las propiedades son las características (atributos) del objeto.
* Los métodos son las acciones que el objeto puede realizar.
* Un objeto **auto** podría tener propiedades como **marca**, **modelo** y métodos como **acelerar()**.

---

**📌  Clase**

* **Es una ** **plantilla (molde) para crear objetos** **.**
* Define las propiedades y métodos que tendrán esos objetos.
* **Es el concepto central de la ** **Programación Orientada a Objetos (POO)** **.
* **Una clase **Auto** definiría cómo deben ser todos los autos (marca, modelo, acelerar).

---

**📌  Instancia**

* **Es un ** **objeto creado a partir de una clase** **.**
* Cada instancia tiene sus propias propiedades y puede tener comportamientos individuales.
* Si **Auto** es una clase, entonces **const miAuto = new Auto()** es una instancia de esa clase.

---

**📌 Función**

* Es un **bloque de código reutilizable** que realiza una tarea específica.
* Puede recibir parámetros o argumentos y devolver un resultado.
* Una función **sumar(a, b)** que suma dos números (parametros)
* sumar(1,2) --> argumentos

---

**📌  Parámetro**

* Es una **variable definida en la declaración de la función**, que recibe un valor cuando la función es llamada.

```
function sumar(a, b) { // a y b son parámetros
    return a + b;
}
```

---

**📌 Argumento**

* Es el **valor real** que pasas a la función cuando la llamas.

```
sumar(2, 3); // 2 y 3 son argumentos
```

---

**📌 Método**

* **Es una ** **función que pertenece a un objeto o clase** **.**
* Los métodos son las acciones que los objetos pueden realizar.
* Un método **encender()** dentro de un objeto **auto**.

---

**📌 Mensaje**

* **Es la ****comunicación entre objetos** en POO.
* Cuando llamas a un método de un objeto, estás enviando un mensaje.
* **auto.encender()** es un mensaje que le dice al objeto **auto** que ejecute su método **encender**.

---

**📌 Polimorfismo**

* **Es la capacidad de que ** **diferentes clases puedan tener métodos con el mismo nombre pero comportamientos diferentes** **.**
* Cada clase puede definir su propia versión del método.
* Clase **Ave** con un método **volar()**.
* Clase **Aguila** y **Pato** que heredan de **Ave**, pero su método **volar()** es diferente.

---

**📌 Herencia**

* **Es la ** **capacidad de una clase de heredar las propiedades y métodos de otra clase** **.**
* La clase que hereda se llama **subclase** o **clase hija**.
* La clase de la que hereda se llama **superclase** o **clase padre**.
* Clase **Animal** (padre).
* Clase **Perro** que hereda de **Animal**.

---

**📌 Encapsulamiento**

* **Es el ** **principio de agrupar propiedades y métodos relacionados dentro de una clase** **.**
* Permite proteger y controlar el acceso a esos datos.
* Los métodos y propiedades privadas son parte del encapsulamiento.
* Una propiedad **#password** en una clase **Usuario** que solo se puede acceder mediante un método.

---

**📌 Abstracción**

* **Es el principio de ** **ocultar los detalles complejos y mostrar solo la información esencial** **.**
* Te permite simplificar la interacción con un objeto.
* Un método **encender()** en una clase **Auto** oculta el proceso interno de encender el motor.

---

### **✅ Variable vs Constante:**

| **Variable**                                  | **Constante**                      |
| --------------------------------------------------- | ---------------------------------------- |
| Su valor puede cambiar.                             | Su valor no puede cambiar.               |
| Se declara con**let**o**var**.          | Se declara con**const**.           |
| Ideal para valores que cambian durante el programa. | Ideal para valores fijos (PI, URL base). |

---

### **✅ Objeto vs Clase:**

| **Objeto**                                                                   | **Clase**                                          |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Es una**instancia concreta**(un auto específico).                           | Es una**plantilla**(molde para crear objetos).     |
| Tiene propiedades y métodos propios.                                              | Define qué propiedades y métodos tendrán los objetos. |
| Se crea directamente (**{}**) o a partir de una clase (**new Clase**). | Se declara con la palabra clave**class**.          |

---

### **✅ Argumento vs Parámetro:**

| **Parámetro**                  | **Argumento**                       |
| ------------------------------------- | ----------------------------------------- |
| Es el nombre definido en la función. | Es el valor real que pasas a la función. |
| Solo existe dentro de la función.    | Es el valor que se pasa en la llamada.    |
| **Ejemplo:**function sumar(a, b)      | **Ejemplo:**sumar(2, 3)                   |

---

### **✅ Método vs Función:**

| **Método**                                  | **Función**                     |
| -------------------------------------------------- | -------------------------------------- |
| Es una función que pertenece a un objeto o clase. | Es una función independiente.         |
| Se usa en objetos o clases.                        | Se usa en cualquier parte del código. |
| **Ejemplo:**auto.encender()                        | **Ejemplo:**sumar(2, 3)                |

---

### **✅ Clase vs Instancia:**

| **Clase**                    | **Instancia**                        |
| ---------------------------------- | ------------------------------------------ |
| Es una plantilla.                  | Es un objeto creado a partir de la clase.  |
| Define las propiedades y métodos. | Tiene propiedades y métodos específicos. |
| **Ejemplo:**class Auto             | **Ejemplo:**const miAuto = new Auto()      |

---

# **🚀 Console.log --> imprimir en consola**

## **✅ 1️⃣ Console.log (Básico)**

* Es el método más común para imprimir texto en la consola.

```
console.log("Hola, mundo");
```

---

## **✅ 2️⃣ Console.log (Múltiples valores)**

* Puedes imprimir varios valores separados por comas.

```
const nombre = "Ana";
const edad = 30;
console.log("Nombre:", nombre, "| Edad:", edad);
```

#### **✅ Resultado:**

```
Nombre: Ana | Edad: 30
```

---

## **✅ 3️⃣ Console.log con Plantillas Literales (Template Strings)**

* Usando las comillas invertidas (`) puedes insertar variables directamente dentro del texto.

```
const producto = "Café";
const precio = 250;
console.log(`Producto: ${producto} | Precio: $${precio}`);
```

#### **✅ Resultado:**

```
Producto: Café | Precio: $250
```

---

## **✅ 4️⃣ Console.log con Formato (CSS en consola)**

* Puedes agregar estilo directamente al texto en la consola.

```
console.log("%cHola, esto tiene estilo!", "color: red; font-size: 20px; font-weight: bold;");
```

#### **✅ Resultado:**

* Imprime el texto en rojo, tamaño 20px, y en negrita.

---

## **✅ 5️⃣ Console.table (Imprimir Tablas)**

* Muestra objetos o arrays en formato de tabla.

```
const personas = [
    { nombre: "Ana", edad: 30 },
    { nombre: "Carlos", edad: 25 },
    { nombre: "Lucía", edad: 28 }
];

console.table(personas);
```

#### **✅ Resultado:**

```
┌─────────┬──────────┬──────┐
│ (index) │ nombre   │ edad │
├─────────┼──────────┼──────┤
│    0    │  "Ana"   │  30  │
│    1    │ "Carlos" │  25  │
│    2    │ "Lucía"  │  28  │
└─────────┴──────────┴──────┘
```

---

## **✅ 6️⃣ Console.error (Errores en la Consola)**

* Imprime texto en rojo, ideal para mensajes de error.

```
console.error("¡Error: No se encontró el archivo!");
```

---

## **✅ 7️⃣ Console.warn (Advertencias)**

* Imprime texto en amarillo, para advertencias.

```
console.warn("Advertencia: El archivo está desactualizado.");
```

---

## **✅ 8️⃣ Console.info (Información)**

* Similar a **console.log**, pero indica que es información.

```
console.info("Información: El sistema se está reiniciando.");
```

---

## **✅ 9️⃣ Console.clear (Limpiar la Consola)**

* Limpia toda la consola.

```
console.clear();
```

---

## **✅ 🔟 Console.assert (Validación de Condición)**

* Solo imprime si la condición es **falsa**.

```
const edad = 15;
console.assert(edad >= 18, "Error: Debes ser mayor de edad");
```

#### **✅ Resultado:**

```
Assertion failed: Error: Debes ser mayor de edad
```

---

## **✅ 1️⃣1️⃣ Console.group y Console.groupEnd (Agrupar Mensajes)**

* Permite agrupar mensajes de consola.

```
console.group("Grupo de Mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();
```

#### **✅ Resultado:**

```
Grupo de Mensajes
    Mensaje 1
    Mensaje 2
```

---

## **✅ 1️⃣2️⃣ Console.time y Console.timeEnd (Medir Tiempo de Ejecución)**

* Permite medir el tiempo que tarda en ejecutarse una parte del código.

```
console.time("Proceso");
for (let i = 0; i < 1000000; i++) {} // Proceso simulado
console.timeEnd("Proceso");
```

#### **✅ Resultado:**

```
Proceso: 1.23ms (depende de tu computadora)
```

---

## **✅ 1️⃣3️⃣ Console.count (Contador Automático)**

* Cuenta cuántas veces se ejecuta.

```
console.count("Contador");
console.count("Contador");
console.count("Contador");
```

#### **✅ Resultado:**

```
Contador: 1
Contador: 2
Contador: 3
```

---

## **✅ 1️⃣4️⃣ Console.trace (Ver Pila de Ejecución)**

* Muestra el camino que siguió el código para llegar a esa línea (debugging).

```
function primera() {
    segunda();
}

function segunda() {
    tercera();
}

function tercera() {
    console.trace("Rastro de ejecución");
}

primera();
```

#### **✅ Resultado:**

```
Rastro de ejecución
    at tercera (...)
    at segunda (...)
    at primera (...)
```

---

## **✅ ¿Cuándo usar cada uno?**

* ✅ **console.log** → Para mensajes generales.
* ✅ **console.error** → Para errores importantes.
* ✅ **console.warn** → Para advertencias.
* ✅ **console.info** → Para información general.
* ✅ **console.table** → Para mostrar objetos y arrays.
* ✅ **console.group** y **console.groupEnd** → Para organizar mensajes.
* ✅ **console.time** y **console.timeEnd** → Para medir rendimiento.
* ✅ **console.trace** → Para depuración (saber cómo llegó a esa línea).

# **📚Variables y Tipos de Datos en JavaScript (Práctico)**

## **🚀 Variables: let, const y var (ejemplos prácticos)**

```
// let: su valor puede cambiar
let contador = 0;
contador = 5;
console.log(contador); // Resultado: 5

// const: su valor no puede cambiar
const nombre = "Ana";
// nombre = "Carlos"; // Esto causaría un error

// var: se usa poco, pero su alcance es diferente
var ciudad = "Buenos Aires";
ciudad = "Rosario";
console.log(ciudad); // Resultado: Rosario
```

---

## **📚 Tipos de Datos en JavaScript (Práctico)**

```
// Números
let edad = 30;
let precio = 19.99;

// Cadenas de texto (Strings)
let saludo = "Hola, mundo";
let nombreUsuario = 'Ana';

// Booleanos
let esMayor = true;
let tienePermiso = false;

// Arrays (Arreglos)
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Manzana", "Banana", "Naranja"];

// Objetos
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Buenos Aires"
};

// Null y Undefined
let sinValor = null;
let valorNoDefinido;
```

---

# **📚 Objetos y sus Métodos (Práctico)**

### Tipos de objetos

```
// Objeto básico
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    encender: function() {
        console.log("El auto está encendido");
    },
};

// Accediendo a las propiedades y métodos
console.log(auto.marca); // Toyota
auto.encender();         // El auto está encendido

// Modificando propiedades
auto.modelo = "Hilux";
console.log(auto.modelo); // Hilux

// Agregando nuevas propiedades
auto.color = "Rojo";
console.log(auto);
```

---

## **📚 Métodos y “this” en Objetos**

```
// Objeto con métodos que usan "this"
const persona = {
    nombre: "Ana",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },
    cumplirAños() {
        this.edad++;
    }
};

// Usando los métodos
persona.saludar(); // Hola, soy Ana
persona.cumplirAños();
console.log(persona.edad); // 31
```

---

---

## **⚡️ Ejemplos prácticos para ver la diferencia del “this”:**

### **1️⃣ Función Declarada y Expresada (tienen su propio this):**

```
const objeto = {
    nombre: "Ana",
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

objeto.saludar(); // ✅ Hola, soy Ana
```

### **2️⃣ Función Flecha (No tiene su propio this):**

```
const objetoFlecha = {
    nombre: "Ana",
    saludar: () => {
        console.log("Hola, soy " + this.nombre);
    }
};

objetoFlecha.saludar(); // ❌ Hola, soy undefined (this no apunta a objetoFlecha)
```

# **📚 Funciones en JavaScript (Práctico)**

### **✅ Funciones Básicas**

```
// Declaración de una función
function saludar() {
    console.log("¡Hola, bienvenido!");
}

// Llamando a la función
saludar();
```

### **✅ Funciones con Parámetros**

```
function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3)); // Resultado: 5
```

### **✅ Funciones Anónimas y Funciones Flecha**

```
// Función anónima (asignada a una variable)
const multiplicar = function(a, b) {
    return a * b;
};

console.log(multiplicar(3, 4)); // Resultado: 12

// Función flecha
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Resultado: 5
```

## **📌 Las 3 formas de definir funciones en JavaScript:**

```
// 1️⃣ Función Declarada
function multiplicarDeclarada(a, b) {
    return a * b;
}

// 2️⃣ Función Expresada (anónima)
const multiplicarExpresada = function(a, b) {
    return a * b;
};

// 3️⃣ Función Flecha (Arrow Function)
const multiplicarFlecha = (a, b) => a * b;
```

---

### **1️⃣ Función Declarada (function)**

* Se usa cuando necesitas una función **disponible en todo el script**, incluso antes de su declaración.
* Es la forma más tradicional.
* ***Permite ser llamada antes de ser definida gracias al “hoisting”.***

#### **🚀 Ejemplo:**

```
console.log(sumar(3, 2)); // ✅ Funciona por hoisting

function sumar(a, b) {
    return a + b;
}
```

#### **✅ ¿Cuándo usarla?**

* Cuando necesitas una función que pueda ser llamada en cualquier parte del archivo.
* Ideal para funciones reutilizables en todo el script.

---

### **2️⃣ Función Expresada (anónima)**

* Es una función almacenada en una variable.
* No tiene nombre propio (es anónima).
* **No tiene hoisting**, solo se puede usar después de ser definida.

#### **🚀 Ejemplo:**

```
// console.log(restar(5, 2)); // ❌ Error: restar is not defined

const restar = function(a, b) {
    return a - b;
};

console.log(restar(5, 2)); // ✅ Resultado: 3
```

#### **✅ ¿Cuándo usarla?**

* Cuando necesitas una función que solo se usa en un contexto específico.
* Ideal para funciones que se pasan como parámetros a otras funciones (callbacks).
* Buena opción para funciones que no necesitan ser llamadas en cualquier parte.

---

### **3️⃣ Función Flecha (Arrow Function)**

* Es la forma más moderna.
* Es más corta y directa.
* **No tiene su propio contexto de this**, lo que la hace ideal para trabajar en objetos, callbacks y funciones anónimas.
* No tiene hoisting.

#### **🚀 Ejemplo:**

```
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // ✅ Resultado: 5

// Si tiene un solo parámetro, puedes omitir los paréntesis:
const doble = n => n * 2;
console.log(doble(4)); // ✅ Resultado: 8
```

#### **✅ ¿Cuándo usarla?**

* Cuando necesitas una función rápida y simple.
* Ideal para callbacks (por ejemplo, en métodos como **map**, **filter**, **reduce**).
* **Cuando necesitas una función que ** **no debe tener su propio contexto de this** **.**

### **✅ Resumen para recordar:**

* **Función Declarada:** Es accesible en cualquier parte del archivo (hoisting). Ideal para funciones reutilizables.
* **Función Expresada:** Solo es accesible después de ser definida. Buena para funciones locales.
* **Función Flecha:** Sintaxis corta, sin su propio **this**. Perfecta para callbacks y funciones rápidas.

## 📌Enfoques para trabajar funciones en objetos y arrays

### **✅ Enfoque 1: Funciones sueltas (Variables)**

```
// Funciones independientes almacenadas en variables
const fn1 = x => x > 10;
const suma = (a, b) => a + b;
```

**🚀 ¿Cómo se usan?**

* Son funciones sueltas, por lo que se llaman directamente:

```
console.log(fn1(15)); // ✅ true
console.log(suma(3, 4)); // ✅ 7
```

**✅ ¿Cuándo usar este enfoque?**

* Cuando tienes pocas funciones y cada una cumple un propósito muy específico.
* Cuando no necesitas organizar las funciones en un grupo.

**✅ ¿Cómo organizar si tienes muchas funciones?**

* Puedes agruparlas en un solo archivo y exportarlas:

```
// archivo funciones.js
const fn1 = x => x > 10;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

// Exportarlas como un objeto (opcional)
module.exports = { fn1, suma, resta };
```

---

### **✅ Enfoque 2: Array de Objetos (Lista de funciones)**

```
const funciones = [
  { name: "suma", value: (a, b) => a + b },
  { name: "multi", value: (a, b) => a * b },
];
```

**🚀 ¿Cómo se usan?**

* Se buscan las funciones por su nombre.
* Ideal para crear un catálogo de funciones dinámicas.

```
// Buscar una función por nombre
const fn = funciones.find(f => f.name === "suma");
console.log(fn.value(3, 4)); // ✅ 7

// Puedes aplicar todas las funciones a un par de valores
funciones.forEach(f => {
  console.log(`Resultado de ${f.name}:`, f.value(5, 3));
});
```

**✅ ¿Cuándo usar este enfoque?**

* Cuando tienes una lista de funciones y necesitas aplicar alguna según un criterio dinámico.
* Cuando trabajas con configuraciones de funciones (como en APIs).

**✅ Buenas prácticas:**

* Utiliza siempre nombres claros (**name**) para que las funciones sean fáciles de identificar.
* Si tienes muchas funciones, considera usar un archivo separado.

---

### **✅ Enfoque 3: Objeto de Funciones**

```
const funciones2 = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b
};
```

**🚀 ¿Cómo se usan?**

* Las llamas directamente por su nombre como propiedades del objeto.

```
console.log(funciones2.suma(4, 5)); // ✅ 9
console.log(funciones2.resta(10, 3)); // ✅ 7

// También puedes acceder de forma dinámica:
const operacion = "suma";
console.log(funciones2[operacion](3, 3)); // ✅ 6
```

**✅ ¿Cuándo usar este enfoque?**

* Cuando tienes muchas funciones relacionadas que forman un “grupo lógico”.
* Perfecto para crear módulos de funciones, como una calculadora, validaciones, etc.

---

### **4️⃣ Enfoque: Objeto con Métodos (Clases y Prototipos)**

* Ideal cuando las funciones están relacionadas y quieres mantenerlas juntas en un contexto lógico.

```
class Calculadora {
    static suma(a, b) {
        return a + b;
    }

    static resta(a, b) {
        return a - b;
    }
}

console.log(Calculadora.suma(10, 5)); // ✅ 15
console.log(Calculadora.resta(10, 5)); // ✅ 5
```

---

### **5️⃣ Enfoque: Funciones en un Módulo (Módulos ES6)**

* Ideal para proyectos grandes donde necesitas organizar funciones en archivos separados.

#### **funciones.js**

```
export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
```

#### **main.js**

```
import { suma, resta } from './funciones.js';

console.log(suma(5, 3)); // ✅ 8
console.log(resta(5, 3)); // ✅ 2
```

---

**✅ ¿Cuándo usar cada enfoque?**

* ✅ **Funciones Sueltas (Variables):** Para funciones independientes que no están relacionadas.
* ✅ **Array de Objetos (Lista):** Para un catálogo de funciones que se acceden por nombre.
* ✅ **Objeto de Funciones:** Para agrupar funciones relacionadas (como una calculadora).
* ✅ **Clases y Prototipos:** Cuando las funciones son métodos de un objeto lógico.
* ✅ **Módulos (Import/Export):** Cuando trabajas en proyectos grandes y necesitas organización.

---

# **📚 ¿Qué es un Array en JavaScript?**

* Un **Array** es una colección ordenada de valores.
* Puedes almacenar cualquier tipo de dato: números, strings, objetos, otros arrays, funciones, etc.

### **🚀 Ejemplos básicos:**

```
// Array de números
const numeros = [1, 2, 3, 4, 5];

// Array de cadenas de texto
const frutas = ["Manzana", "Banana", "Naranja"];

// Array mixto
const mixto = [1, "Hola", true, null, { nombre: "Ana" }, [1, 2, 3]];

// Array de funciones
const operaciones = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
];
```

---

## **✅ ¿Cómo se accede y modifica un Array?**

```
// Accediendo a elementos
console.log(frutas[0]); // ✅ "Manzana"
console.log(frutas[2]); // ✅ "Naranja"

// Modificando un elemento
frutas[1] = "Pera";
console.log(frutas); // ✅ ["Manzana", "Pera", "Naranja"]

// Agregando un nuevo elemento
frutas.push("Durazno");
console.log(frutas); // ✅ ["Manzana", "Pera", "Naranja", "Durazno"]
```

---

## **✅ Métodos de Arrays (TODOS los más importantes)**

**🚀 Métodos para Agregar o Eliminar Elementos**

```
const frutas = ["Manzana", "Banana", "Naranja"];

// .push() - Agregar al final
frutas.push("Durazno");
console.log(frutas); // ✅ ["Manzana", "Banana", "Naranja", "Durazno"]

// .pop() - Eliminar del final
frutas.pop();
console.log(frutas); // ✅ ["Manzana", "Banana", "Naranja"]

// .unshift() - Agregar al inicio
frutas.unshift("Fresa");
console.log(frutas); // ✅ ["Fresa", "Manzana", "Banana", "Naranja"]

// .shift() - Eliminar del inicio
frutas.shift();
console.log(frutas); // ✅ ["Manzana", "Banana", "Naranja"]

// .splice() - Agregar, eliminar o reemplazar en cualquier posición
frutas.splice(1, 1, "Pera");
console.log(frutas); // ✅ ["Manzana", "Pera", "Naranja"]
```

---

### **🚀 Métodos para Buscar o Filtrar Elementos**

```
const numeros = [10, 20, 30, 40, 50];

// .indexOf() - Encontrar el índice de un elemento
console.log(numeros.indexOf(30)); // ✅ 2

// .includes() - Verificar si un elemento está presente
console.log(numeros.includes(20)); // ✅ true

// .find() - Encontrar el primer elemento que cumpla una condición
const encontrado = numeros.find(num => num > 25);
console.log(encontrado); // ✅ 30

// .findIndex() - Encontrar el índice del primer elemento que cumpla una condición
const indice = numeros.findIndex(num => num > 25);
console.log(indice); // ✅ 2

// .filter() - Filtrar todos los elementos que cumplan una condición
const mayores = numeros.filter(num => num > 25);
console.log(mayores); // ✅ [30, 40, 50]
```

---

### **🚀 Métodos para Recorrer o Modificar Elementos**

```
const numeros = [1, 2, 3, 4, 5];

// .forEach() - Recorrer sin modificar
numeros.forEach(num => console.log(num));

// .map() - Crear un nuevo array transformando los valores
const dobles = numeros.map(num => num * 2);
console.log(dobles); // ✅ [2, 4, 6, 8, 10]

// .reduce() - Reducir el array a un solo valor
const sumaTotal = numeros.reduce((acum, num) => acum + num, 0);
console.log(sumaTotal); // ✅ 15
```

---

### **🚀 Métodos para Ordenar o Invertir**

```
const letras = ["d", "a", "c", "b"];

// .sort() - Ordenar (alfabéticamente)
letras.sort();
console.log(letras); // ✅ ["a", "b", "c", "d"]

// Ordenar numéricamente
const nums = [10, 3, 5, 1];
nums.sort((a, b) => a - b);
console.log(nums); // ✅ [1, 3, 5, 10]

// .reverse() - Invertir el orden
nums.reverse();
console.log(nums); // ✅ [10, 5, 3, 1]
```

---

### **🚀 Métodos para Convertir o Manipular**

```
const texto = "Hola,mundo,JavaScript";

// .split() - Convertir un string en un array
const palabras = texto.split(",");
console.log(palabras); // ✅ ["Hola", "mundo", "JavaScript"]

// .join() - Convertir un array en un string
console.log(palabras.join(" - ")); // ✅ "Hola - mundo - JavaScript"

// .concat() - Combinar arrays
const otrosNumeros = [6, 7, 8];
const combinado = numeros.concat(otrosNumeros);
console.log(combinado); // ✅ [1, 2, 3, 4, 5, 6, 7, 8]

// .slice() - Crear una copia parcial
const copia = numeros.slice(1, 3);
console.log(copia); // ✅ [2, 3]
```

---

### **🚀 Métodos Avanzados**

```
const numeros = [1, 2, 3, 4, 5];

// .every() - Verificar si todos cumplen una condición
console.log(numeros.every(num => num > 0)); // ✅ true

// .some() - Verificar si al menos uno cumple una condición
console.log(numeros.some(num => num > 4)); // ✅ true

// .flat() - Aplanar un array multidimensional
const arrayMulti = [1, [2, 3], [4, [5, 6]]];
console.log(arrayMulti.flat(2)); // ✅ [1, 2, 3, 4, 5, 6]

// .flatMap() - Transformar y aplanar al mismo tiempo
const duplicados = [1, 2, 3];
console.log(duplicados.flatMap(n => [n, n * 2])); // ✅ [1, 2, 2, 4, 3, 6]
```

---

# 📚 Condicionales

## **✅ 1️⃣ Condicional IF…ELSE**

* Es la forma más común y directa de manejar condiciones.
* Verifica si una condición es verdadera, y ejecuta un bloque de código.

```
const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

### **✅ ¿Cuándo usar if...else?**

* Cuando tienes condiciones que pueden ser verdaderas o falsas.
* Perfecto para decisiones binarias (verdadero/falso).

---

## **✅ 2️⃣ IF…ELSE IF…ELSE (Múltiples condiciones)**

* Para manejar más de una condición.
* Se ejecuta la primera condición que sea verdadera.

```
const nota = 75;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprobado");
} else if (nota >= 50) {
    console.log("Suficiente");
} else {
    console.log("Reprobado");
}
```

### **✅ ¿Cuándo usar else if?**

* Cuando tienes múltiples opciones.
* Es claro y fácil de leer, pero si tienes muchas condiciones, se vuelve confuso.

---

## **✅ 3️⃣ Operador Ternario (? :)**

* Es una forma simplificada de **if...else** en una sola línea.
* **Sintaxis: **condicion ? valor_si_verdadero : valor_si_falso**.**

```
const esMayor = 20 >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(esMayor); // ✅ "Mayor de edad"
```

### **✅ ¿Cuándo usar el operador ternario?**

* Cuando tienes una condición muy simple.
* Perfecto para asignar valores en una sola línea.
* Evítalo si las condiciones son complejas o largas (pierde claridad).

---

## **✅ 4️⃣ Switch (Para múltiples casos específicos)**

* Es muy útil cuando tienes múltiples opciones claramente definidas.
* Ideal para manejar **“casos” específicos**.

```
const dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Miércoles":
        console.log("Mitad de semana");
        break;
    case "Viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}
```

### **✅ ¿Cuándo usar switch?**

* Cuando tienes múltiples opciones claramente definidas (como días de la semana, tipos de usuario, etc).
* Es más claro que múltiples **else if** en estos casos.
* Si tienes muchas condiciones complejas, **switch** no es ideal.

---

## **✅ 5️⃣ Condicionales Lógicos con Operadores (&&, ||)**

* Utiliza operadores lógicos para simplificar condiciones.

### **AND (&&):**

```
const usuario = "Admin";
const logueado = true;

if (usuario === "Admin" && logueado) {
    console.log("Bienvenido, administrador");
}
```

### **OR (||):**

```
const edad = 16;

if (edad >= 18 || edad === 16) {
    console.log("Puedes ingresar con permiso");
}
```

### **✅ ¿Cuándo usar operadores lógicos?**

* Cuando necesitas que varias condiciones sean verdaderas (AND).
* Cuando una de varias condiciones debe ser verdadera (OR).
* Ideal para simplificar condicionales.

---

## **✅ 6️⃣ Short-Circuiting (Corto circuito)**

* Usa operadores lógicos para simplificar la lógica sin usar **if**.

### **✅ Asignar un valor por defecto:**

```
const nombre = "" || "Usuario Anónimo";
console.log(nombre); // ✅ "Usuario Anónimo"
```

### **✅ Ejecución Condicional (AND):**

```
const usuarioLogueado = true;
usuarioLogueado && console.log("Bienvenido"); // ✅ "Bienvenido"
```

### **✅ ¿Cuándo usar Short-Circuiting?**

* Para asignar valores por defecto.
* Para ejecutar funciones solo si una condición es verdadera.
* Hace el código más limpio y conciso.

---

## **✅ 7️⃣ Nullish Coalescing (??)**

* Es similar a **||** pero solo considera valores nulos o undefined.

```
const nombre = null ?? "Usuario Anónimo";
console.log(nombre); // ✅ "Usuario Anónimo"

const edad = 0 ?? 18;
console.log(edad); // ✅ 0 (porque 0 no es null ni undefined)
```

### **✅ ¿Cuándo usar ???**

* Cuando necesitas un valor por defecto, pero no quieres que **0** o **""** se consideren falsos.

---

## **✅ 8️⃣ Optional Chaining (?.)**

* Verifica si una propiedad o método existe antes de usarlo.

```
const usuario = {
    nombre: "Ana",
    direccion: {
        ciudad: "Buenos Aires"
    }
};

// Verifica si la propiedad existe sin lanzar error
console.log(usuario.direccion?.ciudad); // ✅ "Buenos Aires"
console.log(usuario.telefono?.numero);  // ✅ undefined
```

### **✅ ¿Cuándo usar Optional Chaining?**

* Cuando trabajas con objetos anidados y no tienes la seguridad de que siempre existan.
* Evita errores de “Cannot read property of undefined”.

---

## **✅ ¿Cuándo usar cada tipo de condicional?**

* ✅ **if...else y else if:** Cuando tienes condiciones simples o moderadas.
* ✅ **? : (ternario):** Para condiciones muy cortas y claras.
* ✅ **switch:** Cuando tienes múltiples opciones claramente definidas.
* ✅ **&&, ||, ??:** Para simplificar lógica y asignar valores por defecto.
* ✅ **?. (Optional Chaining):** Para trabajar con objetos que pueden no existir.

---

# 🚀**Errores y mensajes**

### **✅ 1️⃣ Console.log, Console.error, Console.warn (Mensajes Simples)**

* Son la forma más simple de mostrar mensajes.
* No interrumpen el flujo del código.

```
// Mensaje informativo (normal)
console.log("Este es un mensaje informativo");

// Advertencia (en amarillo)
console.warn("¡Advertencia: Algo podría estar mal!");

// Error (en rojo)
console.error("Error: Ocurrió un problema.");
```

**¿Cuándo usar estos mensajes?**

* ✅ **console.log** → Para información general, depuración.
* ✅ **console.warn** → Para advertencias que no detienen el código.
* ✅ **console.error** → Para errores importantes, pero que no interrumpen el flujo del código.

---

## **✅ 2️⃣ Throw Error (Lanzar Errores Controlados)**

* Detiene completamente la ejecución del script si no se captura.
* Ideal para errores críticos que deben detenerse.

```
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Error: No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log(dividir(10, 0)); // 🚨 Lanza error y se va al catch
} catch (error) {
    console.error("Capturado:", error.message);
}
```

**¿Cuándo usar throw new Error?**

* Cuando necesitas detener el flujo del código si ocurre un problema.
* Para manejar errores críticos que deben ser solucionados.

---

## **✅ 3️⃣ New Error (Crear Errores Personalizados)**

* Puedes crear errores personalizados para tu aplicación.
* Puedes capturarlos con un **try...catch**.

```
function iniciarSesion(usuario, contraseña) {
    if (!usuario || !contraseña) {
        throw new Error("Error: Debes ingresar usuario y contraseña");
    }

    if (usuario !== "admin") {
        throw new Error("Error: Usuario incorrecto");
    }

    console.log("Inicio de sesión exitoso");
}

try {
    iniciarSesion("admin", "1234");
    iniciarSesion("", "1234");
} catch (error) {
    console.error("Problema:", error.message);
}
```

**¿Cuándo usar new Error?**

* Para crear errores personalizados en funciones específicas.
* Cuando quieres tener más control sobre el mensaje y tipo de error.

---

## **✅ 4️⃣ Error Personalizado (Extendiendo Error)**

* Puedes crear tu propia clase de error, que tenga más contexto.

```
class ErrorAutenticacion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorAutenticacion";
    }
}

function iniciarSesion(usuario, contraseña) {
    if (!usuario || !contraseña) {
        throw new ErrorAutenticacion("Faltan datos de inicio de sesión");
    }

    if (usuario !== "admin") {
        throw new ErrorAutenticacion("Usuario incorrecto");
    }

    console.log("Inicio de sesión exitoso");
}

try {
    iniciarSesion("usuario", "1234");
} catch (error) {
    if (error instanceof ErrorAutenticacion) {
        console.error("Error de Autenticación:", error.message);
    } else {
        console.error("Error General:", error.message);
    }
}
```

**¿Cuándo usar un error personalizado (clase extendida)?**

* Cuando tienes tipos de errores específicos (Autenticación, Validación, etc).
* Para organizar mejor los errores y manejarlos de manera distinta.

---

## **✅ 5️⃣ Throw directamente (Errores rápidos)**

* Puedes lanzar cualquier valor como error (aunque no es recomendable).
* Esto es útil para pruebas rápidas, pero no es buena práctica en producción.

```
function verificarEdad(edad) {
    if (edad < 18) {
        throw "Debes ser mayor de edad";
    }
    console.log("Acceso permitido");
}

try {
    verificarEdad(16);
} catch (error) {
    console.error("Error:", error);
}
```

**¿Cuándo usarlo?**

* Para pruebas rápidas o funciones muy simples.
* No es recomendable en producción porque no puedes controlar el tipo de error.

---

## **✅ 6️⃣ Throw en Funciones Flecha**

* Puedes lanzar errores directamente en funciones flecha.
* Muy útil para funciones que deben cumplir siempre una condición.

```
const dividir = (a, b) => {
    if (b === 0) throw new Error("Error: No se puede dividir por cero");
    return a / b;
};

try {
    console.log(dividir(10, 0));
} catch (error) {
    console.error("Error:", error.message);
}
```

---

## **✅ 7️⃣ Errores Asíncronos (try…catch con async/await)**

* Para funciones que son asíncronas, puedes capturar errores con **try...catch**.

```
async function obtenerUsuario() {
    throw new Error("Error al obtener el usuario");
}

(async () => {
    try {
        await obtenerUsuario();
    } catch (error) {
        console.error("Error Asíncrono:", error.message);
    }
})();
```

**¿Cuándo usar esto?**

* Cuando trabajas con funciones que tienen **await** o **promesas**.
* Para asegurar que los errores se capturan correctamente.

---

## **✅ ¿Cuándo usar cada uno?**

* ✅ **console.log, console.error, console.warn →** Para mensajes de información, advertencia o error sin detener el flujo.
* ✅ **throw new Error →** Para errores críticos que deben detener el flujo del código.
* ✅ **new Error →** Para crear errores personalizados.
* ✅ **Error Personalizado (Clase) →** Para manejar tipos de errores específicos.
* ✅ **throw directamente →** Para pruebas rápidas o funciones simples.
* ✅ **try...catch →** Para manejar errores sin detener la ejecución.
* ✅ **try...catch async/await →** Para capturar errores en funciones asíncronas.

# 📚 Clases

## **✅ ¿Qué es una Clase en JavaScript?**

* Una **Clase** es una plantilla para crear objetos.
* Define las propiedades y métodos que esos objetos tendrán.
* **Es un concepto central de la ** **Programación Orientada a Objetos (POO)** **.**

---

## **✅ 1️⃣ ¿Cómo se crea una Clase en JavaScript?**

### **📌 Sintaxis Básica:**

```
class Persona {
    // El constructor se ejecuta al crear una nueva instancia
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método de la clase
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una nueva instancia de la clase
const ana = new Persona("Ana", 30);
ana.saludar(); // ✅ "Hola, me llamo Ana y tengo 30 años."
```

---

## **✅ 2️⃣ ¿Cómo funcionan los Métodos de una Clase?**

* Los métodos son funciones que pertenecen a la clase y sus instancias.
* Puedes tener:
  * **Métodos Públicos:** Disponibles para todas las instancias.
  * **Métodos Privados:** Solo accesibles dentro de la clase (usando **#**).

### **Métodos Públicos (Normales):**

```
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Método público
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

const gato = new Animal("Gato", "Felino");
gato.hacerSonido(); // ✅ "Gato hace un sonido."
```

### **Métodos Privados (con #):**

* Solo accesibles dentro de la clase.
* No puedes llamarlos desde fuera.

```
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Método público
    depositar(monto) {
        this.#actualizarSaldo(monto);
    }

    // Método privado
    #actualizarSaldo(monto) {
        this.saldo += monto;
    }
}

const cuenta = new CuentaBancaria("Ana", 1000);
cuenta.depositar(500);
console.log(cuenta.saldo); // ✅ 1500
// cuenta.#actualizarSaldo(100); // ❌ Error: no se puede acceder al método privado
```

---

## **✅ 3️⃣ ¿Cómo funcionan las Propiedades en una Clase?**

* Las propiedades son las características que cada instancia de la clase tendrá.
* Pueden ser públicas o privadas.

### **Propiedades Públicas (Normales):**

```
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

const auto = new Vehiculo("Toyota", "Corolla");
console.log(auto.marca); // ✅ "Toyota"
```

### **Propiedades Privadas (con #):**

* Solo accesibles dentro de la clase.
* No puedes leerlas ni modificarlas directamente desde fuera.

```
class Usuario {
    #password; // Propiedad privada

    constructor(nombre, password) {
        this.nombre = nombre;
        this.#password = password;
    }

    verificarPassword(password) {
        return this.#password === password;
    }
}

const user = new Usuario("Ana", "secreto123");
console.log(user.verificarPassword("secreto123")); // ✅ true
// console.log(user.#password); // ❌ Error: propiedad privada
```

---

## **✅ 4️⃣ Métodos Estáticos (static)**

* No pertenecen a ninguna instancia en particular, sino directamente a la clase.
* No puedes llamarlos desde una instancia.

```
class Calculadora {
    static sumar(a, b) {
        return a + b;
    }

    static restar(a, b) {
        return a - b;
    }
}

console.log(Calculadora.sumar(5, 3)); // ✅ 8
console.log(Calculadora.restar(5, 3)); // ✅ 2
```

---

## **✅ 5️⃣ Herencia (Extends y Super)**

* Las clases pueden heredar de otras clases.
* Puedes crear clases especializadas sin reescribir todo.

```
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// Clase que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad); // Llama al constructor de Persona
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

const estudiante = new Estudiante("Ana", 20, "Ingeniería");
estudiante.saludar(); // ✅ "Hola, soy Ana"
estudiante.estudiar(); // ✅ "Ana está estudiando Ingeniería."
```

---

## **✅ 6️⃣ Clases con Getter y Setter**

* Los **Getters** (**get**) permiten obtener propiedades calculadas.
* Los **Setters** (**set**) permiten modificar propiedades de manera controlada.

```
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Getter para el precio con impuesto
    get precioConImpuesto() {
        return this.precio * 1.21;
    }

    // Setter para cambiar el precio (solo si es positivo)
    set cambiarPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
        }
    }
}

const cafe = new Producto("Café", 100);
console.log(cafe.precioConImpuesto); // ✅ 121
cafe.cambiarPrecio = 150;
console.log(cafe.precioConImpuesto); // ✅ 181.5
```

---

## **✅ ¿Cuándo usar Clases y cuándo Objetos?**

### **✅** ****

### **Usa Clases cuando:**

* Necesitas crear múltiples objetos con la misma estructura.
* Cada objeto tiene propiedades y métodos específicos (como una calculadora, usuario, etc).
* Necesitas herencia (una clase que extiende otra).

### **✅** ****

### **Usa Objetos Literales ({}):**

* Cuando solo necesitas un grupo de valores sin lógica.
* Para configuraciones simples, constantes, o agrupaciones básicas.

```
// Objeto literal (simple)
const usuario = {
    nombre: "Ana",
    edad: 30,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
usuario.saludar();
```

---

# Exportar y declarar

## **✅ Formas de Declarar y Exportar Funciones en JavaScript**

### **📌 1️⃣ Exportar y Importar en Módulos de Node.js (CommonJS - require)**

**✅ a) Exportando Funciones con module.exports (Individuales)**

* Ideal para proyectos de Node.js.
* Puedes exportar funciones directamente.

#### **Archivo: funciones.js**

```
// Función normal
function sumar(a, b) {
    return a + b;
}

// Función flecha
const restar = (a, b) => a - b;

// Exportando las funciones
module.exports = { sumar, restar };
```

#### **Archivo: main.js**

```
// Importando las funciones
const { sumar, restar } = require('./funciones');

console.log(sumar(5, 3)); // ✅ 8
console.log(restar(5, 3)); // ✅ 2
```

---

#### **✅ b) Exportando como un Objeto Completo**

* Puedes exportar todas las funciones juntas como un solo objeto.

#### **Archivo: operaciones.js**

```
const operaciones = {
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

// Exportando como objeto completo
module.exports = operaciones;
```

#### **Archivo: main.js**

```
// Importando el objeto completo
const operaciones = require('./operaciones');

console.log(operaciones.multiplicar(4, 2)); // ✅ 8
console.log(operaciones.dividir(4, 2)); // ✅ 2
```

---

#### **✅ c) Exportando con module.exports directamente (Una sola función)**

* Ideal si solo necesitas exportar una función.

#### **Archivo: calculo.js**

```
module.exports = (a, b) => a + b;
```

#### **Archivo: main.js**

```
// Importando la función directamente
const sumar = require('./calculo');
console.log(sumar(4, 3)); // ✅ 7
```

---

## **✅ 2️⃣ Exportar y Importar en Módulos ES6 (import/export)**

* Esta es la forma moderna, ideal para proyectos front-end y proyectos modernos de Node.js (con **"type": "module"** en **package.json**).

**✅ a) Exportando Funciones Nombradas**

* Puedes exportar varias funciones.

**Archivo: calculos.js**

```
// Funciones definidas
export function sumar(a, b) {
    return a + b;
}

export const restar = (a, b) => a - b;
```

#### **Archivo: main.js**

```
// Importando funciones nombradas
import { sumar, restar } from './calculos.js';

console.log(sumar(10, 5)); // ✅ 15
console.log(restar(10, 5)); // ✅ 5
```

---

**✅ b) Exportar por Defecto (Default Export)**

* Puedes exportar una sola función como predeterminada.

#### **Archivo: division.js**

```
export default function dividir(a, b) {
    return a / b;
}
```

#### **Archivo: main.js**

```
// Importando la función por defecto
import dividir from './division.js';
console.log(dividir(10, 2)); // ✅ 5
```

---

#### **✅ c) Exportando todo como un Objeto Completo (Namespace)**

* Ideal cuando tienes muchas funciones y quieres importarlas juntas.

**Archivo: matematica.js**

```
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}
```

**Archivo: main.js**

```
// Importando todo el módulo como un objeto
import * as Matematica from './matematica.js';

console.log(Matematica.sumar(5, 3)); // ✅ 8
console.log(Matematica.restar(5, 3)); // ✅ 2
console.log(Matematica.multiplicar(5, 3)); // ✅ 15
```

---

## **✅ 3️⃣ Exportar y Importar en HTML (Front-End Directo)**

* Si trabajas directamente en HTML, puedes usar módulos ES6 directamente.

**Archivo: funciones.js**

```
export function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```

**Archivo: index.html**

```
<!DOCTYPE html>
<html>
<head>
    <title>Importar Funciones</title>
</head>
<body>
    <script type="module">
        import { saludar } from './funciones.js';
        console.log(saludar("Ana"));
    </script>
</body>
</html>
```

---

## **✅ 4️⃣ Llamar Funciones de Otros Archivos (Directamente)**

* Si tienes un archivo cargado en el navegador, puedes usar sus funciones directamente.
* Ideal para proyectos front-end simples.

**Archivo: utilidades.js**

```
function mensaje() {
    console.log("Este es un mensaje desde utilidades.js");
}
```

**Archivo: index.html**

```
<!DOCTYPE html>
<html>
<head>
    <title>Funciones Externas</title>
    <script src="utilidades.js"></script>
</head>
<body>
    <script>
        mensaje(); // ✅ Llama a la función del otro archivo
    </script>
</body>
</html>
```

---

## **✅ ¿Cuándo usar cada método?**

* ✅ **CommonJS (require) →** Para proyectos Node.js.
* ✅ **Módulos ES6 (import/export) →** Para proyectos modernos (front-end o back-end).
* ✅ **Cargar directamente en HTML →** Para proyectos muy simples (sin configuraciones).
* ✅ **Namespace (import * as) →** Para organizar muchas funciones juntas.
* ✅ **Export Default →** Para exportar una sola función principal.

---


---

---
