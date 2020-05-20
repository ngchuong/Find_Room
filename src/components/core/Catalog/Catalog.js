import React from 'react';
import './Catalog.scss';

const Catalog = ({ title, handleClick }) => (
    <span className="core-catalog">
        <label onClick={handleClick} className="catalog-content">{title}</label>
    </span>
)

export default Catalog;
