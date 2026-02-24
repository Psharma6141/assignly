import axios from 'axios';
// console.log(import.meta.env.VITE_REACT_APP_API_URL)
const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
