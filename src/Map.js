import React, { useState, useEffect } from 'react';
import './Map.css';
import { useNavigate } from 'react-router-dom';

function Map() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        fetch(apiUrl)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="map-page-container">
            <h2 className="page-title">Products</h2>
            <div className='main-upper-div'>
                {products.map(product => (
                    <div key={product?.id} className='map-main-div'>
                        <img src={product?.image} alt={product?.title} className='product-image' />
                        <h3 className='product-title'>{product?.title}</h3>
                        <p className='product-price'>${product?.price}</p>
                        <p className='product-category'>{product?.category}</p>
                        <p className='product-description'>{product?.description}</p>
                        <p className='product-rating'>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                        <button className="add-to-cart-btn" onClick={() => navigate(`/cart/${product.id}`, { state: { product } })} >Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Map;
