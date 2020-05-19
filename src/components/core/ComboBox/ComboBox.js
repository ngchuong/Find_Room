import React from 'react';
import './ComboBox.scss';

const ComboBox = ({ data }) => {

    const listItem = data.map((item, index) => (
        <option key={index} value={item.value}>{item.name}</option>
    ))
    return (
        <span className="core-combobox">
            <select>
                <option defaultValue>Choose item</option>
                {listItem}
            </select>
        </span>
    );
}


export default ComboBox;