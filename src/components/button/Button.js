import React from 'react';
import classes from "../../pages/mainPage/MainPage.module.css";

const Button = ({text, action, className}) => {
    return (
        <button className={className} onClick={action}>{text}</button>
    );
};

export default Button;