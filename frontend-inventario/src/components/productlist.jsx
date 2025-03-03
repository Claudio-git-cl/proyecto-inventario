import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardTitle, CardDescription } from '@shadcn/ui'; // Importa los componentes de ShadCN

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/products')
            .then(response => {
                console.log('Respuesta de la API:', response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <Card key={product.id} className="shadow-md">
                        <CardContent>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>Precio: ${product.price}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductList;