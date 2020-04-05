import React, { Component } from 'react';
import './LoginPage.scss';
import Input from '../../components/core/Input/Input';
import Button from '../../components/core/Button/Button';

class LoginPage extends Component {
    render() {
        return (
            <div className="core-login">
                <div className="container-login">
                    <div className="form-login">
                        <div className="title-login">
                            <label>Đăng nhập</label>
                        </div>
                        <div className="content-login">
                            <Input placeholderOfInput={'Số điện thoại'} />
                            <Input placeholderOfInput={'Mật khẩu'} />
                            
                        </div>
                        <div className="btn-login">
                            <Button title={'Đăng nhập'} cls={'btn-submit'} />
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
}


export default LoginPage;