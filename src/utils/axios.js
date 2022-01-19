import axios from 'axios';



const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 30000
})


apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token') || '';
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';
    config.headers.language = 'uz';
    return config;
}, error => {
    Promise.reject(error);
})

apiClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return Promise.reject(error);
});

export default apiClient;
