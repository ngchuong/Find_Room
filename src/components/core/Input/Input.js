import React from 'react';
import './input.scss';


const Input = ({placeholderOfInput}) => (
    <span className="container-input">
        <div className="core-wrap">
            <input className="core-input" autoComplete="off" type="text" required/>
            <label htmlFor="name" className="label-name">
                <span className="content-name">{placeholderOfInput}</span>
            </label>
        </div>
    </span>
)


export default Input;
