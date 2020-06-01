import axios from 'axios';

export const getRoomListFactory = () => {
    const getRoomList = async () => {
        const response = await axios.get('http://localhost:80/API_PHP/room/readRoom.php');

        if (response.status !== 200) {
            throw new Error('Get data failed !')
        }

        const result = response.data;
        return result;
    }
    return getRoomList;
}

export const createRoomSagaFactory = () => {
    const createRoom = async (room) => {
        const reqBody = {
            arr_image: JSON.stringify(room.listImage),
            title: room.title,
            address: room.address,
            acreage: room.acreage,
            bed: room.bed,
            bathroom: room.bathroom,
            price: room.price,
            id_user: room.id_user,
            type_room: room.type_room
        };
        const response = await axios.post('http://localhost:80/API_PHP/room/createRoom.php', reqBody, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        if (response.status !== 200) {
            throw new Error('Get data failed !')
        }
        const result = response.data;
        return result;
    }
    return createRoom;
}