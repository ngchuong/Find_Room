import React from 'react';
import logo from '../../asset/image/logoWebsite.png';
import './header.scss';
import Catalog from '../../core/Catalog/Catalog';

const Header = () => (
    <div className="main-header">
        <div className="main-sub-header">
            <div className="header-logo">
                <img className="header-img-logo" src={logo} alt="no-img" />
            </div>
            <div className="header-right">
                <div>
                    <Catalog />
                </div>
                <div>
                    <button className="button-login"><span>login</span></button>
                </div>
                <div><button className="button">Post</button></div>
            </div>
        </div>
    </div>
)

export default Header;
