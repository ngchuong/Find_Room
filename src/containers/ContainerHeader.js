import { connect } from 'react-redux';
import Header from '../components/Header/header';
import { createRoom } from '../actions/Room.js';
import { changeTypeRoom } from '../actions/ChangeTypeRoom.js';


const mapStateToProps = (state) => ({
    listRoom: state.rooms,
})

const mapDispatchtoProps = {
    changeTypeRoom: changeTypeRoom.changeType,
    createRoom: createRoom.start,
}

const ContainerHeader = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(Header);

export default ContainerHeader;