import axios from 'axios';
import auth from '@react-native-firebase/auth';

// Create an instance of axios
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL, // Use the environment variable for the base URL
  timeout: 10000, // Set timeout for API requests
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(async config => {
  const currentUser = auth().currentUser;
  if (currentUser) {
    const token = await currentUser?.getIdToken();
    console.log(token);
    if (token) {
      config.headers['X-Authorization'] = `Bearer ${token}`;
    }
  }
  // const appCheckToken = await firebase.appCheck().getToken()
  // if (appCheckToken) {
  //   config.headers['X-Firebase-AppCheck'] = `${appCheckToken.token}`
  // }
  return config;
});

// Add a response interceptor
apiClient.interceptors.response.use(
  response => {
    // Process successful responses
    return response.data; // Return data directly for simplicity
  },
  error => {
    // Handle errors
    if (error.response?.status === 401) {
      // Example: Handle unauthorized errors (e.g., logout user)
      console.error('Unauthorized! Token may have expired.');
    }
    return Promise.reject(error);
  },
);

export default apiClient;
