import React, { useState } from 'react';
import './Checkout.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {

    const navigate = useNavigate();
    const location = useLocation();
    const { product, discountedPrice } = location.state || {};

    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        month: '',
        year: '',
        cvv: ''
    });

    const [isFlipped, setIsFlipped] = useState(false);

    const formatCardNumber = (value) => {
        // Remove all non-digit characters and group in 4s
        return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cardNumber') {
            setFormData(prev => ({
                ...prev,
                [name]: formatCardNumber(value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleFocus = (e) => {
        if (e.target.name === 'cvv') setIsFlipped(true);
    };

    const handleBlur = (e) => {
        if (e.target.name === 'cvv') setIsFlipped(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment submitted:", formData);
        alert("Payment Successful!");
    };

    return (
        <div className="checkout-container">
            <div className="checkout-card">
                {/* Card flip wrapper */}
                <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front of card */}
                    <div className="credit-card front">
                        <div className="chip"></div>
                        <div className="card-bank">BANK</div>
                        <div className="card-number">{formData.cardNumber || "1234 5678 9012 3456"}</div>
                        <div className="card-holder">{formData.cardName || "CARDHOLDER NAME"}</div>
                        <div className="card-expiry">{formData.month || "MM"}/{formData.year || "YY"}</div>
                    </div>
                    {/* Back of card */}
                    <div className="credit-card back">
                        <div className="cvv-label">CVV</div>
                        <div className="cvv-value">{formData.cvv || '•••'}</div>
                    </div>
                </div>

                {product && (
                    <div className="product-summary">
                        {discountedPrice && (
                            <p><strong>Total Price:</strong> ${discountedPrice}</p>
                        )}
                    </div>
                )}

                {/* Payment Form */}
                <form className="payment-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        className="input-field"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength={19}
                    />
                    <input
                        type="text"
                        name="cardName"
                        placeholder="Cardholder Name"
                        className="input-field"
                        value={formData.cardName}
                        onChange={handleChange}
                    />

                    <div className="row">
                        <input
                            type="text"
                            name="month"
                            placeholder="MM"
                            className="input-small"
                            value={formData.month}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="year"
                            placeholder="YY"
                            className="input-small"
                            value={formData.year}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            className="input-small"
                            value={formData.cvv}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <button type="submit" className="pay-btn" onClick={() => { navigate('/thankyou') }} >PAY NOW</button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
