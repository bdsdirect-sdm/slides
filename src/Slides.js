import React, { useState } from 'react';
import './Slides.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Slides() {

    const navigate = useNavigate();

    const [hoveredSlide, setHoveredSlide] = useState(null);

    const handleMouseEnter = (id) => {
        // console.log("Mouse entered:", id);
        setHoveredSlide(id);
    };

    const handleMouseLeave = () => {
        // console.log("Mouse left");
        setHoveredSlide(null);
    };

    const slidesData = [
        ['slide1', 'slide2', 'slide3', 'slide4'],
        ['slide5', 'slide6', 'slide7', 'slide8'],
        ['slide9', 'slide10', 'slide11', 'slide12']
    ];

    return (
        <div className="main-div">
            {slidesData.map((slideGroup, groupIndex) => (
                <div key={groupIndex} className="inner-div">
                    {slideGroup.map((slideId, slideIndex) => (
                        <div
                            key={`${groupIndex}-${slideIndex}`}
                            onMouseEnter={() => handleMouseEnter(slideId)}
                            onMouseLeave={handleMouseLeave}
                            className={`slides ${hoveredSlide === slideId ? 'hovered' : ''}`}
                        >
                            {slideIndex + 1}
                        </div>
                    ))}
                </div>
            ))}
            <br />
            <Button onClick={() => navigate('/button')} />

            <Button onClick={() => navigate('/hello')} />


        </div>
    );
}

export default Slides;
