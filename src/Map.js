import React, { useState, useEffect } from 'react';

function Map() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        fetch(apiUrl)
            .then(res => console.log("hello", res))
            .then(json => {
                console.log(json);
                setProducts(json);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products && products.map((product, index) => (
                <div key={product.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} style={{ width: '150px' }} />
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
                </div>
            ))}
        </div>
    );
}

export default Map;
