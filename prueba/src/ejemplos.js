// server.js
const express = require("express");
const funciones = require("./funciones"); // Importamos las funciones desde el archivo funciones.js
let misFunciones = { ...funciones }; // Clonamos las funciones para poder manipularlas.

const app = express();
app.use(express.json());

/* GET - Validar Array de Números

	•	Crea un endpoint GET /validar que reciba un parámetro de consulta (array) con una lista de números en formato JSON.
	•	El servidor debe verificar si todos los números cumplen con las siguientes condiciones:
	•	Son mayores a 0.
	•	Son pares.
	•	Son divisibles por 5.
	•	Devuelve una respuesta JSON indicando si cumplen (true) o no (false).
*/
app.get("/validar", (req, res) => {
  const { array } = req.query;
  if (!array) {
    return res.status(400).json({ mensaje: "Array es requerido en la consulta." });
  }

  const valores = JSON.parse(array);
  const cumple = Object.values(misFunciones).every(fn => valores.every(num => fn(num)));
  res.json({ cumple });
});

// POST - Realizar Operaciones Matemáticas
app.post("/calcular", (req, res) => {
  const { op1, op2, fn } = req.body;
  const funcion = misFunciones[fn];
  if (!funcion) {
    return res.status(400).json({ mensaje: "Función no soportada." });
  }

  const resultado = funcion(op1, op2);
  res.json({ op1, op2, fn, resultado });
});

// PUT - Actualizar una Función
app.put("/actualizar", (req, res) => {
  const { fn, nuevaFuncion } = req.body;
  if (!misFunciones[fn]) {
    return res.status(400).json({ mensaje: "Función no encontrada." });
  }

  misFunciones[fn] = eval(nuevaFuncion);
  res.json({ mensaje: `Función ${fn} actualizada.`, nuevaFuncion: nuevaFuncion.toString() });
});

// DELETE - Eliminar una Función
app.delete("/eliminar/:fn", (req, res) => {
  const { fn } = req.params;
  if (!misFunciones[fn]) {
    return res.status(400).json({ mensaje: "Función no encontrada." });
  }

  delete misFunciones[fn];
  res.json({ mensaje: `Función ${fn} eliminada.` });
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log("Servidor escuchando en http://localhost:5000");
});