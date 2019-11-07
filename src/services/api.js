import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-atende-facil.azurewebsites.net/api/',
});

export default api;
