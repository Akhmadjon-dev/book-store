import axios  from  'axios';


const client = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
});


client.interceptors.request.use(config => {
    console.log('Request Interceptor', config);
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

client.interceptors.response.use(response => {
    console.log('Response Interceptor', response);
    return response;
});


export default client;