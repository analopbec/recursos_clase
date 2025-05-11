**Iniciar un proyecto:**
mkdir nombreProyecto
cd nombreProyecto
npm init -y
npm i -D nodemon
npm i express
npm i lodash

npm i fs

## **Crear un proyecto paso a paso**

1) iniciar proyecto en el directorio (dar de alta un proyecto)
   mkdir nombreProyecto
2) Entrar en el proyecto
   cd nombreProyecto
3) iniciar npm (automatico sin rellenar opciones)
   npm init -y
4) Instalar dependencias
   npm install (...) o npm i
5) Entrar en vsc
   .code

**Si quiesiera crear archivos dentro de la carpeta: touch server.js**

## **Node.js y NPM**

* **Node.js** es un entorno de ejecución de JavaScript del lado del servidor, construido sobre el motor de JavaScript V8 de Google Chrome.
* Permite ejecutar código JavaScript fuera del navegador, es decir, en el servidor, permitiendo crear aplicaciones de backend, APIs, servidores web, scripts de automatización y mucho más.
* Es conocido por ser **asíncrono y basado en eventos**, lo que lo hace muy eficiente para manejar múltiples conexiones de forma simultánea.

#### **Características Clave de Node.js:**

* **No Bloqueante (Non-Blocking):** Utiliza un modelo de entrada/salida asíncrono, lo que permite manejar múltiples solicitudes sin bloquear el hilo principal.
* **Escalabilidad:** Ideal para aplicaciones en tiempo real y APIs de alto rendimiento.
* **Ecosistema Extenso:** Aprovecha el enorme repositorio de paquetes de npm (Node Package Manager).
* **Compatible con JavaScript:** Permite a los desarrolladores usar el mismo lenguaje tanto en el frontend como en el backend.

#### **¿Cuándo usar Node.js?**

* Para crear APIs RESTful y GraphQL.
* En aplicaciones en tiempo real como chats, juegos multijugador, aplicaciones colaborativas.
* En servidores que necesitan manejar múltiples conexiones de forma eficiente (microservicios).
* Para scripts de automatización y procesamiento de archivos.

---

### **¿Qué es npm (Node Package Manager)?**

* **npm** es el gestor de paquetes predeterminado para Node.js. Permite instalar, actualizar, gestionar y compartir paquetes de código.
* Proporciona acceso al **registro de npm (npm registry)**, una enorme base de datos de paquetes de software de código abierto que puedes utilizar directamente en tus proyectos.
* Facilita la gestión de las dependencias de un proyecto y permite mantener las versiones de los paquetes controladas.

#### **Características Clave de npm:**

* **Gestión de Paquetes:** Permite instalar, actualizar y eliminar paquetes de manera sencilla.
* **Dependencias:** Administra las dependencias de un proyecto a través del archivo **package.json**.
* **Scripts de Automatización:** Permite definir scripts de automatización para ejecutar comandos (ej. **npm start**, **npm test**).
* **Publicación de Paquetes:** Permite a los desarrolladores publicar sus propias bibliotecas para compartirlas con la comunidad.

## **¿Qué son las Dependencias en JavaScript?**

* Son bibliotecas de código externo que se incluyen en un proyecto para agregar funcionalidades específicas.
* **Se gestionan a través de un ** **gestor de paquetes** **, generalmente ****npm (Node Package Manager)** o  **yarn** **.**
* Existen dos tipos principales:
  * **Dependencias de Producción (dependencies)**: Son necesarias para que la aplicación funcione en producción (ejemplo: **express**).
  * **Dependencias de Desarrollo (devDependencies)**: Son útiles solo durante el desarrollo (ejemplo: **nodemon**).

### **1. Nodemon**

* Una herramienta que monitorea los cambios en los archivos de tu aplicación y reinicia automáticamente el servidor.
* Facilita el desarrollo al no tener que reiniciar manualmente el servidor cada vez que se realiza un cambio.
* Se instala como dependencia de desarrollo

```
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

### **2. Express**

* Un framework de servidor web para Node.js, que facilita la creación de APIs y servidores HTTP.
* Simplifica el manejo de rutas, middleware, y gestión de peticiones HTTP.
* Crear APIs RESTful, manejar rutas, autenticación, y gestionar peticiones HTTP (GET, POST, PUT, DELETE).

```
const express = require('express');
const app = express();
const PORT = 3000;
// const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### **3. Lodash**

* Es una biblioteca de utilidades para manipulación de datos, especialmente arrays, objetos y cadenas.
* Simplifica operaciones comunes como filtrado, agrupamiento, ordenamiento y manejo de colecciones.
* Manipular colecciones de datos, realizar cálculos rápidos en arrays, y transformar objetos de forma eficiente.

```
const _ = require('lodash');

const users = [
  { name: 'Ana', age: 30 },
  { name: 'Luis', age: 25 },
  { name: 'María', age: 30 },
];

const grouped = _.groupBy(users, 'age');
console.log(grouped);
// Resultado:
// {
//   '25': [{ name: 'Luis', age: 25 }],
//   '30': [{ name: 'Ana', age: 30 }, { name: 'María', age: 30 }]
// }
```

### **4. fs**

**¿Qué es fs (File System) en Node.js?**

* **fs** es un **módulo nativo de Node.js** que permite interactuar con el **sistema de archivos (File System)** de tu computadora.
* **Con **fs** puedes ****leer, escribir, modificar, copiar y eliminar archivos o carpetas** directamente desde tu código JavaScript.

---

**✅ ¿Cómo se usa fs?**

* Debes importarlo primero:

```
const fs = require('fs');
```

**1️⃣ Leer archivos**

* Puedes leer archivos de texto, JSON, imágenes, etc.
* Existen dos formas:
  * **Sincrónica (readFileSync)**: Lee el archivo y detiene el código hasta que termina.
  * **Asincrónica (readFile)**: Lee el archivo sin bloquear el código.

**Sincrónico**

```
const fs = require('fs');

// Leer un archivo JSON
const data = fs.readFileSync('./data.json', 'utf-8');
console.log(JSON.parse(data));
```

**Asincrónico**

```
fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
    } else {
        console.log(JSON.parse(data));
    }
});
```

---

**2️⃣ Escribir archivos**

* Puedes crear un nuevo archivo o sobrescribir uno existente.
* También puedes agregar texto al final de un archivo existente.

#### **Ejemplo: Guardar un archivo JSON**

```
const fs = require('fs');
const productos = [{ id: 1, nombre: "Café", precio: 250 }];

// Guardar el array en un archivo JSON
fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
```

#### **Ejemplo: Escribir (Sobrescribir) Asincrónicamente**

```
fs.writeFile('./productos.json', JSON.stringify(productos, null, 2), (err) => {
    if (err) {
        console.error("Error al guardar el archivo:", err);
    } else {
        console.log("Archivo guardado correctamente");
    }
});
```

---

**3️⃣ Modificar archivos (Agregar contenido)**

* Puedes agregar contenido a un archivo sin eliminar el contenido anterior.

```
// Agregar texto al final del archivo (Append)
fs.appendFileSync('./log.txt', 'Nuevo registro\n');
```

---

**4️⃣ Eliminar archivos**

* Puedes eliminar archivos que ya no necesitas.

```
fs.unlinkSync('./archivo-innecesario.txt');
```

---

**5️⃣ Verificar si un archivo o carpeta existe**

* Esto es muy útil para asegurarte de que no causes un error al leer un archivo inexistente.

```
if (fs.existsSync('./productos.json')) {
    console.log("El archivo existe");
} else {
    console.log("El archivo no existe");
}
```

---

**6️⃣ Crear carpetas (Directorios)**

* Puedes crear carpetas de manera programática.

```
fs.mkdirSync('./nueva-carpeta');
```

* Para crearlas de manera asincrónica:

```
fs.mkdir('./nueva-carpeta', (err) => {
    if (err) {
        console.error("Error al crear la carpeta:", err);
    } else {
        console.log("Carpeta creada correctamente");
    }
});
```

---

**✅ ¿Cuándo debes usar fs en una API?**

* Cuando necesitas **guardar datos de manera persistente** (como productos en un carrito de compras).
* Cuando quieres **leer configuraciones** o plantillas de texto.
* **Cuando deseas ** **guardar logs (registros de errores o eventos)** **.**
* Para crear archivos dinámicamente (como reportes, documentos, etc).

---

**✅ ¿Cuáles son los problemas comunes al usar fs?**

* **❌ ****Error ENOENT: no such file or directory** → El archivo o carpeta no existe.
* ❌ **Permisos** → No tienes permisos para leer o escribir en una carpeta.
* ❌ **Bloqueo de código (readFileSync)** → La lectura sincrónica puede hacer que tu API sea lenta si el archivo es grande.

---

## **🌐 ¿Qué es una API?**

* API significa **“Application Programming Interface”** (Interfaz de Programación de Aplicaciones).
* Es una forma de permitir que diferentes aplicaciones se comuniquen entre sí.
* En términos simples: es una **puerta de entrada** que permite que otras aplicaciones consuman o envíen información a tu aplicación.

---

## **🌐 ¿Qué es una API REST?**

* **REST (Representational State Transfer)** es un estilo de arquitectura para diseñar APIs.
* Utiliza métodos HTTP para manejar los recursos:
  * **GET:** Obtener datos (leer).
  * **POST:** Crear nuevos datos.
  * **PUT:** Actualizar datos existentes.
  * **DELETE:** Eliminar datos.

---

## **🌐 ¿Qué es un puerto en una API?**

* Un **puerto** es como una “puerta” de tu servidor que permite recibir solicitudes.
* Los puertos más comunes son:
  * **80:** HTTP (sin cifrado).
  * **443:** HTTPS (con cifrado).
  * **3000:** Muy común para aplicaciones locales de Node.js.

### **✅** ****

### **Ejemplo práctico:**

* Cuando accedes a **http://localhost:3000**, estás accediendo a tu API a través del **puerto 3000**.

---

## **🌐 ¿Cómo hacer que una API escuche en un puerto específico?**

* Utilizamos **app.listen** en Express para definir el puerto.
* La API comienza a “escuchar” y esperar solicitudes en ese puerto.

```
// server.js (Servidor básico)
const express = require('express');
const app = express();
const port = 3000;

// Configurar el servidor para escuchar en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

---

## **✅ ¿Qué son req y res en Express?**

* **Son abreviaciones de ****request (solicitud)** y  **response (respuesta)** **.**
* Cada vez que alguien accede a tu API, se genera una solicitud (**req**) y una respuesta (**res**).

### **req (Solicitud):**

* Contiene toda la información sobre la solicitud que el cliente (navegador, Postman, otra API) ha enviado a tu servidor.
* Las propiedades más importantes son:
  * **req.body** → Contiene el cuerpo de la solicitud (datos que envías en un POST o PUT).
  * **req.params** → Contiene los parámetros dinámicos de la URL (**:id**).
  * **req.query** → Contiene los parámetros de consulta (en la URL después de **?**).

**🚀 Ejemplo:**

```
app.post('/api/productos', (req, res) => {
    console.log(req.body); // ✅ Muestra el cuerpo de la solicitud (JSON que envías)
    res.send("Producto recibido");
});
```

* Si envías este JSON en el cuerpo:

```
{
    "nombre": "Café",
    "precio": 250
}
```

* Verás esto en la consola:

```
{ nombre: "Café", precio: 250 }
```

---

### **res (Respuesta):**

* Es el objeto que usamos para enviar la respuesta al cliente.
* Puedes usarlo para enviar texto, JSON, archivos, etc.

```
// Enviar texto plano
res.send("Hola, mundo");

// Enviar un objeto en formato JSON
res.json({ mensaje: "¡Hola, mundo en JSON!" });

// Enviar una respuesta con estado específico (como 404)
res.status(404).json({ mensaje: "Recurso no encontrado" });
```

---

### **✅ ¿Qué es status y qué significan los números?**

* **status** es el **código de estado HTTP** que indica el resultado de la solicitud.
* Los códigos de estado tienen categorías específicas:

| **Código** | **Categoría** | **Significado**          |
| ----------------- | -------------------- | ------------------------------ |
| 1xx               | Informativo          | La solicitud está en proceso. |
| 2xx               | Éxito               | La solicitud fue exitosa.      |
| 3xx               | Redirección         | La solicitud fue redirigida.   |
| 4xx               | Error del Cliente    | El cliente hizo algo mal.      |
| 5xx               | Error del Servidor   | El servidor tuvo un problema.  |

### **Códigos más comunes que usamos:**

* **200 (OK)** → Todo salió bien.
* **201 (Created)** → Un recurso fue creado correctamente.
* **400 (Bad Request)** → La solicitud está mal hecha (datos incorrectos).
* **404 (Not Found)** → No se encontró el recurso.
* **500 (Internal Server Error)** → Error del servidor.

```
// Respuesta exitosa (200)
res.status(200).json({ mensaje: "Todo está bien" });

// Recurso creado (201)
res.status(201).json({ mensaje: "Producto creado" });

// Error del cliente (404)
res.status(404).json({ mensaje: "Producto no encontrado" });
```

---

### **✅ ¿Qué es parseInt y por qué lo usamos?**

* **parseInt** es una función de JavaScript que convierte un **texto (string) en un número entero**.
* Lo usamos porque los parámetros de la URL (**req.params**) son siempre texto, incluso si parecen números.

```
app.get('/api/productos/:id', (req, res) => {
    console.log(req.params.id);       // "1" (string)
    console.log(parseInt(req.params.id)); // 1 (number)
});
```

**¿Por qué es importante usar parseInt?**

* Porque si intentas hacer cálculos con texto, obtendrás resultados inesperados.

**🚫 Ejemplo sin parseInt:**

```
const id = "5"; // Esto es un string
console.log(id + 1); // ❌ "51" (concatenación de texto)
```

**✅ Ejemplo con parseInt:**

```
const id = parseInt("5"); // Esto es un número
console.log(id + 1); // ✅ 6 (suma numérica)
```

---

### **✅ ¿Qué hace res.json y cuál es la diferencia con res.send?**

* **res.json** convierte automáticamente tu respuesta en formato JSON (JavaScript Object Notation).
* **res.send** envía texto o JSON, pero no garantiza que sea JSON puro.

**🚀 Ejemplo de JSON:**

```
app.get('/api/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: "Café", precio: 250 },
        { id: 2, nombre: "Té", precio: 150 }
    ];
    res.json(productos); // ✅ Envío en formato JSON
});
```

**🚀 Ejemplo de Send:**

```
app.get('/api/texto', (req, res) => {
    res.send("Hola, este es un texto plano");
});
```

---

### **✅ ¿Qué hace res.status().json?**

* Combina dos acciones:
  1. Define el **estado HTTP** (**status**).
  2. Envía la respuesta en formato JSON.

```
// Producto creado correctamente (201)
app.post('/api/productos', (req, res) => {
    const producto = req.body;
    producto.id = 1;
    res.status(201).json(producto);
});
```

* Aquí estamos diciendo:
  * El código de estado es **201 (Creado)**.
  * La respuesta es un **JSON** con el producto.

---

### **✅ Resumen Simplificado (Para Recordar)**

| **Concepto** | **Explicación**                          | **Ejemplo**                                  |
| ------------------ | ----------------------------------------------- | -------------------------------------------------- |
| req                | La solicitud que envía el cliente.             | **req.body**para ver el JSON enviado.        |
| res                | La respuesta que envías al cliente.            | res.send("Hola")                                   |
| status             | Código de estado HTTP que indica el resultado. | res.status(404).json({ mensaje: "No encontrado" }) |
| parseInt           | Convierte texto en número entero.              | parseInt("5")**→ 5**                        |
| res.json           | Envía la respuesta en formato JSON.            | res.json({ mensaje: "Hola" })                      |
| res.status().json  | Define estado y envía JSON al mismo tiempo.    | res.status(201).json({ id: 1 })                    |

---

## **🌐 ¿Qué es un Endpoint?**

* Un **Endpoint** es una URL específica de tu API que realiza una acción.
* Es como una “puerta” específica de tu API que ejecuta una función.

### **Tipos de Endpoints (REST):**

* **GET /productos:** Obtener una lista de productos.
* **POST /productos:** Crear un nuevo producto.
* **PUT /productos/1:** Actualizar el producto con ID 1.
* **DELETE /productos/1:** Eliminar el producto con ID 1.

---

## **🌐 Crear tus primeros Endpoints en Node.js y Express**

Vamos a construir una API muy básica para entender cómo funcionan los endpoints.

### **Paso 1: Crear el servidor**

```
// server.js
const express = require('express');
const app = express();
const port = 3000;

// Permitir que Express entienda JSON en las solicitudes
app.use(express.json());

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

---

### **Paso 2: Crear nuestro primer Endpoint (GET)**

* Un endpoint GET sirve para **leer información**.

```
// server.js
app.get('/api/saludo', (req, res) => {
    res.send("¡Hola, bienvenido a mi API!");
});
```

### **¿Cómo probarlo?**

* **Accede a: **http://localhost:3000/api/saludo
* Respuesta esperada:

```
¡Hola, bienvenido a mi API!
```

---

### **Paso 3: Crear un Endpoint POST (Crear Datos)**

* El método POST se usa para **crear nuevos recursos**.

```
// server.js
app.post('/api/productos', (req, res) => {
    const nuevoProducto = req.body; // Leemos el cuerpo de la solicitud (JSON)
    console.log("Producto recibido:", nuevoProducto);
    res.status(201).json({
        mensaje: "Producto creado",
        producto: nuevoProducto
    });
});
```

**¿Cómo probarlo?**

* Usa **Postman**, **Insomnia** o tu navegador para hacer una solicitud POST a:
  * **URL: **http://localhost:3000/api/productos
  * JSON:

```
{
    "nombre": "Café",
    "precio": 250
}
```

* Respuesta esperada:

```
{
    "mensaje": "Producto creado",
    "producto": {
        "nombre": "Café",
        "precio": 250
    }
}
```

---

### **Paso 4: Crear un Endpoint PUT (Actualizar Datos)**

* **El método PUT se usa para ** **actualizar un recurso existente** **.**

```
// server.js
app.put('/api/productos/:id', (req, res) => {
    const id = req.params.id; // Obtenemos el ID desde la URL
    const productoActualizado = req.body;
    console.log(`Actualizando producto ${id}`, productoActualizado);
    res.json({
        mensaje: `Producto ${id} actualizado`,
        producto: productoActualizado
    });
});
```

### **¿Cómo probarlo?**

* Hacer una solicitud PUT a:
  * **URL: **http://localhost:3000/api/productos/1
  * JSON:

```
{
    "nombre": "Café Premium",
    "precio": 300
}
```

* Respuesta esperada:

```
{
    "mensaje": "Producto 1 actualizado",
    "producto": {
        "nombre": "Café Premium",
        "precio": 300
    }
}
```

---

### **Paso 5: Crear un Endpoint DELETE (Eliminar Datos)**

* El método DELETE se usa para **eliminar un recurso existente**.

```
// server.js
app.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Eliminando producto ${id}`);
    res.json({
        mensaje: `Producto ${id} eliminado`
    });
});
```

**¿Cómo probarlo?**

* Hacer una solicitud DELETE a:
  * **URL: **http://localhost:3000/api/productos/1
* Respuesta esperada:

```
{
    "mensaje": "Producto 1 eliminado"
}
```

---

### **✅ ¿Cómo funcionan las rutas dinámicas?**

* En las rutas usamos **:id** para indicar un parámetro dinámico.
* Esto permite manejar recursos específicos:
  * **GET /api/productos/1** → Obtiene el producto 1.
  * **PUT /api/productos/2** → Actualiza el producto 2.
  * **DELETE /api/productos/3** → Elimina el producto 3.

# 🚀 Proyecto 1: API productos















---
