import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContactApi = contact => {
    return axios.post('/contacts', contact)
};

export const getContactApi = () => {
    return axios.get('/contacts')
};

export const removeContactApi = id => {
    return axios.delete(`/contacts/${id}`)
};