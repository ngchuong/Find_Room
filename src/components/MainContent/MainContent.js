import React from 'react';
import './MainContent.scss';
import Home from '../../pages/home/home.js';
import LoginPage from '../../pages/Login/LoginPage.js';
import RegisterPage from '../../pages/Register/Register.js';
const MainContent = () => (
    <div className="main-content">
        <div className="container">
            {/* <Home /> */}
            {/* <LoginPage /> */}
            <RegisterPage />
        </div>
    </div>
)

export default MainContent;
