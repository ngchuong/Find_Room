import React, { useState } from 'react';
import './LoginPage.scss';
import Input from '../../components/core/Input/Input';
import Button from '../../components/core/Button/Button';

import { Redirect } from 'react-router-dom';

function LoginPage() {
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
        console.log(txtUserName)
        console.log(txtPwd)
        if (txtUserName === "admin" && txtPwd === "123") {
            localStorage.setItem("userInfo", JSON.stringify({
                username: txtUserName,
                password: txtPwd,
            }))
        }
    }
    let isLogin = localStorage.getItem('userInfo');
    if (isLogin) {
        return (
            <Redirect to="/" />
        )
    }
    return (
        <div className="core-login">
            <div className="container-login">
                <div className="form-login">
                    <div className="title-login">
                        <label>Đăng nhập</label>
                    </div>
                    <div className="content-login">
                        <Input
                            name={"userName"}
                            placeholderOfInput={'Số điện thoại'}
                            value={txtUserName}
                            onChange={onChangeInput}
                            type={"text"}
                        />

                        <Input
                            name={"password"}
                            placeholderOfInput={'Mật khẩu'}
                            value={txtPwd}
                            onChange={onChangeInput}
                            type={"password"}
                        />

                    </div>
                    <div className="btn-login">
                        <Button handleClick={onLogin} title={'Đăng nhập'} cls={'btn-submit'} />
                        <Button title={'Quay về'} cls={'btn-cancel'} />
                    </div>
                    <div className="more-login">
                        <label>Bạn chưa có tài khoản ? <a href="google.com">Đăng ký</a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;