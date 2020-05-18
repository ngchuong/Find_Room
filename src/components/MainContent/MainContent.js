import React from 'react';
import './MainContent.scss';
import Room from '../../containers/Room';
import PageLogin from '../../containers/ContainerLogin.js';
import PageRegister from '../../containers/ContainerRegisterUser.js';
// import LoginPage from '../../pages/Login/LoginPage.js';
import RegisterPage from '../../pages/Register/Register.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

const MainContent = () => (
    <div className="main-content">
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={Room} />
                    <Route path="/login" component={PageLogin} />
                    <Route path="/register" component={PageRegister} />

                </Switch>
            </Router>
        </div>
    </div>
)

export default MainContent;
