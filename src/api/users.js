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
    const registerUsers = async (user) => {
        const reqBody = {
            name: user.txtUserName,
            phone_number: user.txtPhoneNumber,
            email: user.txtEmail,
            password: user.txtPwd,
        };
        const response = await axios.post('http://localhost:80/API_PHP/users/postUsers.php', reqBody, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        if (response.status !== 200) {
            throw new Error('Register data failed !')
        }
        
        const result = response.data;
        return result;
    }
    return registerUsers;
}