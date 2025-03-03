const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para manejar la solicitud GET a /
app.get('/', (req, res) => {
  res.send('Frontend is running');
});

// Realizar una solicitud GET al backend
fetch('http://localhost:5001/api/products') // Cambiado a /api/products
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

app.listen(PORT, () => {
  console.log(`Frontend server is running on port ${PORT}`);
});