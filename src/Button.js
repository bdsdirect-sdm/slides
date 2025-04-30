import React from 'react'
import { useNavigate } from 'react-router-dom';

function Button({ onClick }) {

    const navigate = useNavigate();

    return (
        <div>
            <button className="button-main" onClick={onClick} onDoubleClick={() => navigate('/map')}>
                Press me
            </button>
            Hi
        </div>
    )
}

export default Button;
