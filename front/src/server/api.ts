import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3333'// link do server'
})
export default api;
