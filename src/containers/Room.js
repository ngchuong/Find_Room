import { connect } from 'react-redux';
import Home from '../pages/home/home';
import { getListRoom } from '../actions/Room.js';

const mapStateToProps = (state) => ({
    listRoom: state.rooms,
    typeRoom: state.typeRoom
})

const mapDispatchtoProps = {
    getListRooms: getListRoom.start,
}

const Room = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(Home);

export default Room;