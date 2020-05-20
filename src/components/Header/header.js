import React, { useCallback, useState, useEffect } from 'react';
import logo from '../../asset/image/logo2.png';
import './header.scss';
import Catalog from '../core/Catalog/Catalog';
import Button from '../core/Button/Button';
import ModalForm from '../core/Modal/Modal';

import {
    NavLink,
    Redirect,
} from "react-router-dom";

const Header = ({ listRoom, changeTypeRoom }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [typeRoom, setTypeRoom] = useState(null);

    useEffect(() => {
        changeTypeRoom(typeRoom);
    }, [typeRoom])

    const redirectPageLogin = () => {
        // return <Redirect to="/login" />
        if (!isLogin) {
            window.location.href = "http://localhost:3000/login";
        } else {
            localStorage.removeItem('userInfo')
        }
    }

    const redirectHome = () => {
        window.location.href = "http://localhost:3000";
    }

    const changeTypeRoom1 = () => {
        setTypeRoom(1);
    }
    const changeTypeRoom2 = () => {
        setTypeRoom(2);
    }
    const openModal = useCallback(() => {
        setIsModalVisible(true);
    }, [])
    const closeModal = useCallback(() => {
        setIsModalVisible(false);
    }, [])
    let isLogin = localStorage.getItem('userInfo');
    return (
        <div className="main-header">
            <div className="main-sub-header">
                <div className="header-logo" onClick={redirectHome}>
                    <img className="header-img-logo" src={logo} alt="no-img" />
                </div>
                <div className="header-right">
                    <span className="catalog">
                        <span>
                            <Catalog
                                handleClick={changeTypeRoom1}
                                title="thuê nhà"
                            />
                        </span>
                        <span>
                            <Catalog
                                handleClick={changeTypeRoom2}
                                title="mua nhà"
                            />
                        </span>
                    </span>
                    <span className="button">
                        <span>
                            <Button handleClick={redirectPageLogin} title={(isLogin) ? "LOGOUT" : "LOGIN"} cls="btn-login" />
                        </span>
                        <span>
                            <Button handleClick={openModal} title="POST" cls="btn-post" />
                        </span>

                        {/* <button className="button-login"><span>login</span></button> */}
                    </span>
                </div>
            </div>
            <ModalForm
                isOpen={isModalVisible}
                isClose={closeModal}
                data={listRoom}
            />
        </div>
    )
}
export default Header;
