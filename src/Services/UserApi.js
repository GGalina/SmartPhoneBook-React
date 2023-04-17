import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUserApi = userData => {
    return axios.post('/users/signup', userData)
};

export const LogInUserApi = userData => {
    return axios.post('/users/login', userData)
};

export const LogOutUserApi = () => {
    return axios.post('/users/logout')
};

export const refreshUserApi = () => {
    return axios.get(`/users/current`)
};