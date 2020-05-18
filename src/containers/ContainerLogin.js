import { connect } from 'react-redux';
import LoginPage from '../pages/Login/LoginPage.js';
import { getUsers } from '../actions/User.js';

const mapStateToProps = (state) => ({
    users: state.users,
})

const mapDispatchtoProps = {
    getUsers: getUsers.start,
}

const PageLogin = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(LoginPage);

export default PageLogin;