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
        console.log(room)
        const reqBody = {
            title: room.title,
            acreage: room.acreage,
            bed: room.bed,
            bathroom: room.bathroom,
            price: room.price,
            arr_image: JSON.stringify(room.listImage),
            id_user: room.id_user,
            type_room: room.type_room
        };
        console.log(reqBody);
        const response = await axios.post('http://localhost:80/API_PHP/room/createRoom.php', reqBody, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        if (response.status !== 200) {
            throw new Error('Get data failed !')
        }
        const result = response.data;
        console.log(result)
        return result;
    }
    return createRoom;
}