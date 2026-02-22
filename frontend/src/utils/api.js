import axios from 'axios';

const api = axios.create({
    baseURL: "https://assignly-0h2y.onrender.com",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
