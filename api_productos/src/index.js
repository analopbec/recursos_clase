// server.js
const express = require('express');
const app = express();
const port = 3004;
app.use(express.json());

const productos = require('./productos.json'); // leemos el archivo JSON
const { sumarNumeros, numeroMayor, ordenarTextos, filtrarMayores } = require('./funciones');
const data = require('./data.json');


app.get('/data', (req, res) => {
    res.status(200).json(productos);
});

// Endpoint para agregar un producto
app.post('/api/productos', (req, res) => {
    const nuevoProducto = req.body;
    nuevoProducto.id = productos.length + 1;
    productos.push(nuevoProducto);

    // Guardar en el JSON
    fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
    res.status(201).json(nuevoProducto);
});

// Endpoint para actualizar un producto (PUT)
app.put('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (producto) {
        producto.nombre = req.body.nombre || producto.nombre;
        producto.precio = req.body.precio || producto.precio;
        fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
        res.status(200).json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

// Endpoint para eliminar un producto (DELETE)
app.delete('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    productos = productos.filter(p => p.id !== id);

    // Guardar en el JSON
    fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
    res.status(200).json({ mensaje: "Producto eliminado" });
});


app.get('/api/sumar', (req, res) => {
    try {
        const suma = sumarNumeros(data.numeros);
        res.status(200).json({ suma });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al sumar los números", error: error.message });
    }
});

// ✅ Endpoint para obtener el número mayor
app.get('/api/mayor', (req, res) => {
    try {
        const mayor = numeroMayor(data.numeros);
        res.status(200).json({ mayor });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el número mayor", error: error.message });
    }
});

// ✅ Endpoint para ordenar los textos
app.get('/api/ordenar-textos', (req, res) => {
    try {
        const textosOrdenados = ordenarTextos([...data.textos]); // Usamos copia para no modificar el original
        res.status(200).json({ textos: textosOrdenados });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al ordenar textos", error: error.message });
    }
});

// ✅ Endpoint para filtrar números mayores a un valor dado (Query)
app.get('/api/filtrar', (req, res) => {
    try {
        const minimo = parseInt(req.query.minimo);
        if (isNaN(minimo)) {
            return res.status(400).json({ mensaje: "El parámetro 'minimo' debe ser un número" });
        }

        const filtrados = filtrarMayores(data.numeros, minimo);
        res.status(200).json({ numeros: filtrados });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al filtrar números", error: error.message });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    console.log(data); // comprobar por pantalla que se lee el archivo

});