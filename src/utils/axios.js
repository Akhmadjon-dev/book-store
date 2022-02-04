import axios  from  'axios';


const Client = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
});


Client.interceptors.request.use(config => {
    console.log('Request Interceptor', config);
    
    return config;
});

Client.interceptors.response.use(response => {
    console.log('Response Interceptor', response);
    return response;
});


export default Client;