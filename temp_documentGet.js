import React, { useState } from 'react';
import './Slides.css';

function Slides() {

    const [open, setOpen] = useState({
        slide1: '',
        slide2: '',
        slide3: '',
        slide4: '',
        slide5: '',
        slide6: '',
        slide7: '',
        slide8: '',
        slide9: '',
        slide10: '',
        slide11: '',
        slide12: ''
    });

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

            <div className="inner-div">
                <div id='slide1' onMouseEnter={() => handleClick('slide1')} onMouseLeave={() => handleLeave('slide1')} className="slides">1</div>
                <div id='slide2' onMouseEnter={() => handleClick('slide2')} onMouseLeave={() => handleLeave('slide2')} className="slides">2</div>
                <div id='slide3' onMouseEnter={() => handleClick('slide3')} onMouseLeave={() => handleLeave('slide3')} className="slides">3</div>
                <div id='slide4' onMouseEnter={() => handleClick('slide4')} onMouseLeave={() => handleLeave('slide4')} className="slides">4</div>
            </div>

            <div className="inner-div">
                <div id='slide5' onMouseEnter={() => handleClick('slide5')} onMouseLeave={() => handleLeave('slide5')} className="slides">5</div>
                <div id='slide6' onMouseEnter={() => handleClick('slide6')} onMouseLeave={() => handleLeave('slide6')} className="slides">6</div>
                <div id='slide7' onMouseEnter={() => handleClick('slide7')} onMouseLeave={() => handleLeave('slide7')} className="slides">7</div>
                <div id='slide8' onMouseEnter={() => handleClick('slide8')} onMouseLeave={() => handleLeave('slide8')} className="slides">8</div>
            </div>

            <div className="inner-div">
                <div id='slide9' onMouseEnter={() => handleClick('slide9')} onMouseLeave={() => handleLeave('slide9')} className="slides">9</div>
                <div id='slide10' onMouseEnter={() => handleClick('slide10')} onMouseLeave={() => handleLeave('slide10')} className="slides">10</div>
                <div id='slide11' onMouseEnter={() => handleClick('slide11')} onMouseLeave={() => handleLeave('slide11')} className="slides">11</div>
                <div id='slide12' onMouseEnter={() => handleClick('slide12')} onMouseLeave={() => handleLeave('slide12')} className="slides">12</div>
            </div>
        </div>
    )
}

export default Slides;
