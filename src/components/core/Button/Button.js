import React from 'react';
import './Button.scss';

const Button = ({title, cls, handleClick, autofocus}) => (
    <span className="core-button">
        <button onClick = {handleClick} className={cls}>
            {title}
        </button>
    </span>
)



export default Button;