import { connect } from 'react-redux';
import Header from '../components/Header/header';
import { getListRoom } from '../actions/Room.js';

const mapStateToProps = (state) => ({
    listRoom: state.rooms,
})

const mapDispatchtoProps = {
    // getListRooms: getListRoom.start,
}

const ContainerHeader = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(Header);

export default ContainerHeader;