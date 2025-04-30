import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartPage.css';

function CartPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [promoCode, setPromoCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    if (!product) {
        return <div className="empty-cart">No product data found.</div>;
    }

    const originalPrice = product.price;
    const discountedPrice = discountApplied ? originalPrice * 0.5 : originalPrice;
    const formattedPrice = discountedPrice.toFixed(2);

    const handleApplyPromo = () => {
        if (promoCode.trim().toUpperCase() === 'BHUVIN') {
            setDiscountApplied(true);
            toast.success('Promo code applied! 50% discount', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            toast.error('Invalid promo code', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { product, discountedPrice } });
    };

    return (
        <div className="cart-page-container">
            <ToastContainer />
            <div className="cart-card">
                <img src={product.image} alt={product.title} className="cart-product-image" />
                <div className="cart-details">
                    <h2 className="cart-title">{product.title}</h2>
                    <p className="cart-description">{product.description}</p>
                    <p className="cart-category">Category: {product.category}</p>
                    <p className="cart-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>

                    <div className="promo-section">
                        <input
                            type="text"
                            placeholder="Enter Promo Code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="promo-input"
                        />
                        <button className="apply-btn" onClick={handleApplyPromo}>
                            Apply Code
                        </button>
                    </div>

                    <p className="cart-total">
                        <strong>Total:</strong> ${formattedPrice}
                    </p>

                    <button className="checkout-btn" onClick={handleCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
