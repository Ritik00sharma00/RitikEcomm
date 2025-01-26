import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    // Exclude routes that don't need a token
    const excludedRoutes = ['/login', '/signup'];
    if (!excludedRoutes.includes(config.url)) {
      const token = localStorage.getItem('token'); 
      console.log(token);
      // Retrieve the token from localStorage
    
      config.headers['Authorization'] = `Bearer ${token}`; // Add token to headers
    
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
