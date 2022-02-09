import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.box3.work/'
})

export default api;