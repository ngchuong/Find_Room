import React from 'react';
import './MainContent.scss';
import Room from '../../containers/Room';
import LoginPage from '../../pages/Login/LoginPage.js';
import RegisterPage from '../../pages/Register/Register.js';
const MainContent = () => (
    <div className="main-content">
        <div className="container">
            <Room />
            {/* <LoginPage /> */}
            {/* <RegisterPage /> */}
        </div>
    </div>
)

export default MainContent;
