import React from 'react';
import './ComboBox.scss';

const ComboBox = ({ optionDefault, data }) => {

    const listItem = data.map((item, index) => (
        <option key={index} value={item.value}>{item.name}</option>
    ))
    return (
        <span className="core-combobox">
            <select>
                <option selected disabled >{optionDefault}</option>
                {listItem}
            </select>
        </span>
    );
}


export default ComboBox;