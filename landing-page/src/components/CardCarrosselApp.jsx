import React from "react";
import "./CarrosselApp.css";

const CardCarrosselApp = ({ img, imgAlt, title, text }) => {
    return (
        <div>
        <div className="">
            <img src={img} alt={`logo do ${imgAlt}`} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        </div>
    );
};

export default CardCarrosselApp;
