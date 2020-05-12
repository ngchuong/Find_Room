export const getRoomListFactory = () => {
    const getRoomList = async () => {
        const response = await fetch('http://localhost:80/API_PHP/room/readRoom.php');

        if (response.status !== 200) {
            throw new Error('Get data failed !')
        }

        const result = await response.json();

        return result;
    }
    return getRoomList;
}