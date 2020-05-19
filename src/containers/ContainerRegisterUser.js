import { connect } from 'react-redux';
import RegisterPage from '../pages/Register/Register.js';
import { addUsers } from '../actions/User.js';

const mapStateToProps = (state) => ({
    users: state.users,
})

const mapDispatchtoProps = {
    createUser: addUsers.start,
}

const PageRegister = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(RegisterPage);

export default PageRegister;