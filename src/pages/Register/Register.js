import React, { Component } from 'react';
import './Register.scss';
import Input from '../../components/core/Input/Input';
import Button from '../../components/core/Button/Button';
import { NavLink } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className="core-register">
            <div className="container-register">
                <div className="form-register">
                    <div className="title-register">
                        <label>Đăng ký</label>
                    </div>
                    <div className="content-register">
                        <Input placeholderOfInput={'Số điện thoại'} />
                        <Input placeholderOfInput={'Email'} />
                        <Input placeholderOfInput={'Mật khẩu'} />
                        <Input placeholderOfInput={'Nhập lại mật khẩu'} />

                    </div>
                    <div className="btn-register">
                        <Button title={'Đăng ký'} cls={'btn-submit'} />
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