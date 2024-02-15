import axios from 'axios';
//https://www.themoviedb.org/movie/now-playing?api_key=a926beb5af9413b8951931b3e790399b&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;