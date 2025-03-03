import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/productlist'; // Asegúrate de que la ruta sea correcta

const App = () => {
    return (
        <div>
            <ProductList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));