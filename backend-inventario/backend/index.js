const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Para manejar archivos
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Cargar productos desde un archivo JSON
let products = [];

const loadProducts = () => {
    try {
        const data = fs.readFileSync('products.json', 'utf8');
        products = JSON.parse(data);
        console.log('Productos cargados:', products); // Agrega esta línea
    } catch (err) {
        console.error('Error al cargar productos:', err);
    }
};


// Función para guardar productos en el archivo
const saveProducts = () => {
    fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
};

// Cargar productos al iniciar el servidor
loadProducts();

// Ruta para obtener los productos
app.get('/api/products', (req, res) => {
    console.log('Productos antes de enviar:', products); // Agrega esta línea
    res.json(products);
});

// Ruta para agregar un nuevo producto
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    if (!newProduct.name) {
        return res.status(400).json({ message: 'El nombre del producto es requerido' });
    }
    products.push({ id: products.length + 1, ...newProduct });
    saveProducts(); // Guardar cambios
    res.status(201).json(newProduct);
});

// Ruta para actualizar un producto
app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const index = products.findIndex(product => product.id === parseInt(id));
    
    if (index !== -1) {
        if (!updatedProduct.name) {
            return res.status(400).json({ message: 'El nombre del producto es requerido' });
        }
        products[index] = { ...products[index], ...updatedProduct };
        saveProducts(); // Guardar cambios
        return res.json(products[index]);
    }
    return res.status(404).json({ message: 'Producto no encontrado' });
});

// Ruta para eliminar un producto
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(product => product.id === parseInt(id));
    
    if (index !== -1) {
        products.splice(index, 1);
        saveProducts(); // Guardar cambios
        return res.status(204).send();
    }
    return res.status(404).json({ message: 'Producto no encontrado' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});