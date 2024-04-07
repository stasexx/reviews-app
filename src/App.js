// src/App.js
import React, { useState, useEffect } from 'react';
import Product from './Components/Product';
import Pagination from './Components/Pagination';
import ItemsPerPageSelector from './Components/ItemsPerPageSelector';

const App = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Product Reviews</h1>
            <ItemsPerPageSelector itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
            {currentProducts.map(product => (
                <Product key={product.id} product={product} />
            ))}
            <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} paginate={paginate} currentPage={currentPage} />
        </div>
    );
};

export default App;
