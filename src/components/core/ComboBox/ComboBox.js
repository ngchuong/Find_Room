import React from 'react';
import './ComboBox.scss';

const ComboBox = ({ value1,item, optionDefault, data, onChange, name }) => {
    function handleChange(e) {
        onChange && onChange(e, item);
    }
    const listItem = data.map((item, index) => (
        <option key={index} value={item.value}>{item.name}</option>
    ))
    return (
        <span className="core-combobox">
            <select name={name} defaultValue={value1} onChange={handleChange}>
                <option selected disabled >{optionDefault}</option>
                {listItem}
            </select>
        </span>
    );
}


export default ComboBox;