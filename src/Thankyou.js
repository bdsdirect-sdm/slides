import React from 'react';
import './ThankYouPage.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {

    const navigate = useNavigate();

    return (
        <div className="thankyou-container">
            <div className="thankyou-card">
                <h1>Thank you for your purchase.</h1>
                <p>
                    We'll call you in 30 minutes, but you can check new post in our dashboard section—{' '}
                    <span onClick={() => { navigate("/map") }}>
                        dashboard
                    </span>
                </p>
                <button onClick={() => { navigate("/map") }}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ThankYouPage;
