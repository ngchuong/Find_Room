import React from 'react';
import './MainContent.scss';
import Room from '../../containers/Room';
import LoginPage from '../../pages/Login/LoginPage.js';
import RegisterPage from '../../pages/Register/Register.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const MainContent = () => (
    <div className="main-content">
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={Room} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
)

export default MainContent;
