import axios from 'axios';

// const webAddress : string = window.location.href

const api = axios.create({
    // baseURL: webAddress.replace(/.$/, ":")+'5000',
    baseURL: 'http://localhost:5000',
});

export default api;