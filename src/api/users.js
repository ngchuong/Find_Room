import axios from 'axios';

export const getUsersFactory = () => {
    const getUsers = async () => {
        const response = await axios.get('http://localhost:80/API_PHP/users/getUsers.php');

        if (response.status !== 200) {
            throw new Error('Get data failed !')
        }
        
        const result = response.data;
        return result;
    }
    return getUsers;
}

export const registerUsersFactory = () => {
    const registerUsers = async () => {
        const response = await axios.get('http://localhost:80/API_PHP/users/postUsers.php');

        if (response.status !== 200) {
            throw new Error('Register data failed !')
        }
        
        const result = response.data;
        return result;
    }
    return registerUsers;
}