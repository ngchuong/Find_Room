import React from 'react';
import './input.scss';


const Input = ({ placeholderOfInput, item, value, name, onChange, type }) => {
    function handleChange(e) {
        onChange && onChange(e, item);
    }
    return (
        <span className="container-input">
            <div className="core-wrap">
                <input className="core-input" name={name} onChange={handleChange} value={value} autoComplete="off" type={type} required />
                <label htmlFor="name" className="label-name">
                    <span className="content-name">{placeholderOfInput}</span>
                </label>
            </div>
        </span>
    )
}


export default Input;
