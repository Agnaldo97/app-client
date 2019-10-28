import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend-hacking-rio.azurewebsites.net/api/',
});

export default api;
