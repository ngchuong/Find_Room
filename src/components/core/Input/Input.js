import React from 'react';
import './input.scss';
import PropTypes from 'prop-types';

const Input = () => (
    <div className="container-input">
        <div className="core-wrap">
            <input className="core-input" autoComplete="off" type="text" required/>
            <label htmlFor="name" className="label-name">
                <span className="content-name">Name</span>
            </label>
        </div>
    </div>
)

// Input.PropTypes = {
//     placeholder: PropTypes.string,
// }
export default Input;
