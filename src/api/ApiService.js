import axios from '../utils/axiosCustomize';


const postLogin = (userName, userPassword) => {
    return axios.post('api/v1/users/login', { username: userName, password: userPassword })
}
const postRegister = (userEmail, userPassword, userName) => {
    return axios.post('api/v1/register',
        { email: userEmail, password: userPassword, username: userName })
}

export {
    postLogin,
    postRegister,
}  