import { connect } from 'react-redux';
import Header from '../components/Header/header';
// import { getListRoom } from '../actions/Room.js';
import { changeTypeRoom } from '../actions/ChangeTypeRoom.js';

const mapStateToProps = (state) => ({
    listRoom: state.rooms,
})

const mapDispatchtoProps = {
    changeTypeRoom: changeTypeRoom.changeType,
}

const ContainerHeader = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(Header);

export default ContainerHeader;