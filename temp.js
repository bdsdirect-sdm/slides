import React, { useState } from 'react';
import './Slides.css';

function Slides() {
    const slidesData = [
        ['slide1', 'slide2', 'slide3', 'slide4'],
        ['slide5', 'slide6', 'slide7', 'slide8'],
        ['slide9', 'slide10', 'slide11', 'slide12']
    ];

    const handleClick = (id) => {
        console.log("ID -------->", id);
        document.getElementById(id).style.backgroundColor = "#d3e3e3";
    }

    const handleLeave = (id) => {
        console.log("Mouse left", id);
        document.getElementById(id).style.backgroundColor = "";
    }

    return (
        <div className="main-div">
            {slidesData.map((slideGroup, groupIndex) => (
                <div key={groupIndex} className='inner-div'>
                    {slideGroup.map((slideId, slideIndex) => (
                        <div
                            key={slideId} // Optional: You can replace with key={`${groupIndex}-${slideIndex}`}
                            onMouseEnter={() => handleClick(slideId)}
                            onMouseLeave={() => handleLeave(slideId)} // Fix: Changed handleClick to handleLeave
                            className="slides" // Added className for styling
                        >
                            {slideIndex + 1}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Slides;
