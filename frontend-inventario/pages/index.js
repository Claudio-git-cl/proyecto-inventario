import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price) };

    if (editingProductId) {
      // Edit product
      fetch(`http://localhost:5001/api/products/${editingProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      .then(response => response.json())
      .then(data => {
        setProducts(products.map(product => 
          product.id === editingProductId ? data : product
        ));
        resetForm();
        setSuccessMessage('Producto actualizado con éxito!');
      })
      .catch((error) => {
        console.error('Error al editar el producto:', error);
      });
    } else {
      // Add new product
      fetch('http://localhost:5001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      .then(response => response.json())
      .then(data => {
        setProducts([...products, data]);
        resetForm();
        setSuccessMessage('Producto agregado con éxito!');
      })
      .catch((error) => {
        console.error('Error al agregar el producto:', error);
      });
    }
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditingProductId(product.id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/api/products/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setProducts(products.filter(product => product.id !== id));
      setSuccessMessage('Producto eliminado con éxito!');
    })
    .catch((error) => {
      console.error('Error al eliminar el producto:', error);
    });
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setEditingProductId(null);
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error al cargar productos: {error.message}</div>;
  }

  return (
    <div>
      <h1>Bienvenido a la Aplicación de Inventario</h1>
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEdit(product)} className="ml-2 bg-yellow-500 text-white p-1 rounded">Editar</button>
            <button onClick={() => handleDelete(product.id)} className="ml-2 bg-red-500 text-white p-1 rounded">Eliminar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Precio del producto"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingProductId ? 'Actualizar Producto' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
};

export default Home;