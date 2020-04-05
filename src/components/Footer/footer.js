import React from 'react';
import './footer.scss';
import logo from '../../asset/image/logo2.png';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
    <div className="main-footer">
        <div className="container-footer">
            <div className="footer-intro">
                <img className="footer-img-logo" src={logo} alt="no-img" />
                <div><i className="fa fa-phone"> 0962.296.199</i></div>
                <div><i className="fa fa-envelope"> findroom@gmail.com</i></div>
                <div><i className="fa fa-map-marker-alt">Tòa nhà VIT, 519 Kim Mã, Ba Đình, Hà Nội</i></div>
            </div>
            <div className="footer-content">
                <div>
                    <a href="google.com">Hướng dẫn</a>

                </div>
                <div>
                    <a href="google.com">Hỗ trợ</a>
                </div>
            </div>
            <div className="footer-contact">
                <label>Liên Hệ</label>
                <div>
                    <span className="fb">
                        <i className="fa fa-facebook-square"></i>
                    </span>
                    <span className="twitter">
                        <i className="fa fa-twitter-square"></i>
                    </span>
                    <span className="youtube">
                        <i className="fa fa-youtube-square"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;