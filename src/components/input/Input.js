import React from 'react';
import classes from "./Input.module.css";

const Input = ({onChange, placeholder, value}) => {
    return (
        <input className={classes.inp}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};
export default Input;