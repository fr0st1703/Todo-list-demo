import React from "react";
import './Button.css'

const Button = ({name, onClick, customClass}) => {
    return(
        <button 
        onClick = { onClick }
        type="button" 
        className={`btn ${customClass ? customClass : ''}`}>
            { name }
        </button>
    )
}

export default Button;