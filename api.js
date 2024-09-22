import axios from 'axios';

const API = axios.create({
    // baseURL: 'http://localhost:5000', // Remplacez par l'URL de votre serveur
    baseURL: 'http://172.20.10.2:5000', // Remplacez par l'URL de votre serveur
    headers: {
        'Content-Type': 'application/json'
    }
});


export default API;