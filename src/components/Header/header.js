import React from 'react';
import logo from '../../asset/image/logo2.png';
import './header.scss';
import Catalog from '../core/Catalog/Catalog';
import Button from '../core/Button/Button';


const test  = () => {
    alert('a')
}
const Header = () => (
    <div className="main-header">
        <div className="main-sub-header">
            <div className="header-logo">
                <img className="header-img-logo" src={logo} alt="no-img" />
            </div>
            <div className="header-right">
                <span className="catalog">
                    <span>
                        <Catalog title="thuê nhà" />
                    </span>
                    <span>
                        <Catalog title="mua nhà" />
                    </span>
                </span>
                <span className="button">
                    <span>
                        <Button handleClick={test} title="LOGIN" cls="btn-login" />
                    </span>
                    <span>
                        <Button title="POST" cls="btn-post" />

                    </span>

                    {/* <button className="button-login"><span>login</span></button> */}
                </span>
            </div>
        </div>
    </div>
)

export default Header;
