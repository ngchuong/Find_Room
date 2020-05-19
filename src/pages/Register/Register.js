import React, { useState } from 'react';
import './Register.scss';
import Input from '../../components/core/Input/Input';
import Button from '../../components/core/Button/Button';
import { NavLink } from 'react-router-dom';

function RegisterPage({ createUser }) {
    const [txtUserName, setTxtUserName] = useState('');
    const [txtPhoneNumber, setTxtPhoneNumber] = useState('');
    const [txtEmail, setTxtEmail] = useState('');
    const [txtPwd, setTxtPwd] = useState('');
    const [txtRePwd, setTxtRePwd] = useState('');

    function onChangeInput(e) {
        let target = e.target;
        let name = target.name;
        let value = (target.type === "checkbox") ? target.checked : target.value;
        if (name === "phone_number") {
            setTxtPhoneNumber(value);
        } else if (name === "user_name") {
            setTxtUserName(value);
        } else if (name === "password") {
            setTxtPwd(value);
        } else if (name === "email") {
            setTxtEmail(value);
        } else if (name === "repassword") {
            setTxtRePwd(value);
        }
    }

    function onRegister(e) {
        e.preventDefault();
        if (txtRePwd === txtPwd) {
            const params = {
                txtUserName,
                txtPhoneNumber,
                txtEmail,
                txtPwd,
            }
            console.log(params);
            createUser(params);

        }

    }
    return (
        <div className="core-register">
            <div className="container-register">
                <div className="form-register">
                    <div className="title-register">
                        <label>Đăng ký</label>
                    </div>
                    <div className="content-register">
                        <Input
                            name={"user_name"}
                            placeholderOfInput={'Tên người dùng'}
                            value={txtUserName}
                            onChange={onChangeInput}
                            type={"text"}
                        />
                        <Input
                            name={"phone_number"}
                            placeholderOfInput={'Số điện thoại'}
                            value={txtPhoneNumber}
                            onChange={onChangeInput}
                            type={"number"}
                        />
                        <Input
                            name={"email"}
                            placeholderOfInput={'Email'}
                            value={txtEmail}
                            onChange={onChangeInput}
                            type={"text"}
                        />
                        <Input
                            name={"password"}
                            placeholderOfInput={'Mật khẩu'}
                            value={txtPwd}
                            onChange={onChangeInput}
                            type={"text"}
                        />
                        <Input
                            name={"repassword"}
                            value={txtRePwd}
                            placeholderOfInput={'Nhập lại mật khẩu'}
                            onChange={onChangeInput}
                            type={"text"}
                        />

                    </div>
                    <div className="btn-register">
                        <Button handleClick={onRegister} title={'Đăng ký'} cls={'btn-submit'} />
                        <Button title={'Quay về'} cls={'btn-cancel'} />
                    </div>
                    <div className="more-register">
                        <label>Bạn đã có tài khoản ? <NavLink to="/login">Đăng nhập</NavLink></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;