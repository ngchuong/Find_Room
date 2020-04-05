import React from 'react';
import './Catalog.scss';

const Catalog = ({title}) => (
    <span className="core-catalog">
        <a className="catalog-content" href="google.com">{title}</a>
    </span>
)

export default Catalog;
