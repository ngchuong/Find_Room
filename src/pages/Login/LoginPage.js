import React, { useState, useEffect } from 'react';
import './LoginPage.scss';
import Input from '../../components/core/Input/Input';
import Button from '../../components/core/Button/Button';

import { Redirect, NavLink } from 'react-router-dom';

function LoginPage({ getUsers, users }) {
    useEffect(() => {
        getUsers();
    }, [])

    // console.log(users)
    const [txtUserName, setTxtUserName] = useState('');
    const [txtPwd, setTxtPwd] = useState('');

    function onChangeInput(e) {
        let target = e.target;
        let name = target.name;
        let value = (target.type === "checkbox") ? target.checked : target.value;
        if (name === "userName") {
            setTxtUserName(value);
        } else if (name === "password") {
            setTxtPwd(value);
        }
    }

    function onLogin(e) {
        e.preventDefault();
        if (users) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].phone_number && users[i].password) {
                    localStorage.setItem("userInfo", JSON.stringify({
                        username: txtUserName,
                        password: txtPwd,
                    }))
                    window.location.href = "http://localhost:3000";

                    console.log("oke!");
                }
            }
        }
        if (txtUserName === "admin" && txtPwd === "123") {
            localStorage.setItem("userInfo", JSON.stringify({
                username: txtUserName,
                password: txtPwd,
            }))
        }
    }
    // let isLogin = localStorage.getItem('userInfo');
    // if (isLogin) {
    //     window.location.href = "http://localhost:3000";
    // }
    return (
        <div className="core-login">
            <div className="container-login">
                <div className="form-login">
                    <div className="title-login">
                        <label>Đăng nhập</label>
                    </div>
                    <div className="content-login">
                        <div>
                            <Input
                                name={"userName"}
                                placeholderOfInput={'Số điện thoại'}
                                value={txtUserName}
                                onChange={onChangeInput}
                                type={"text"}
                            />
                        </div>
                        <div>
                            <Input
                                name={"password"}
                                placeholderOfInput={'Mật khẩu'}
                                value={txtPwd}
                                onChange={onChangeInput}
                                type={"password"}
                            />
                        </div>
                    </div>
                    <div className="btn-login">
                        <Button
                            handleClick={onLogin}
                            title={'Đăng nhập'}
                            cls={'btn-submit'}
                            autofocus={true}
                        />
                        <Button
                            title={'Quay về'}
                            cls={'btn-cancel'}
                        />
                    </div>
                    <div className="more-login">
                        <label>Bạn chưa có tài khoản ? <NavLink to="/register">Đăng ký</NavLink></label>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;