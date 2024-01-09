import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

let isRefreshing = false;
let refreshFailedRequests = [];

axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;

        const refresh_token = localStorage.getItem('refresh_token');

        if (refresh_token) {
          try {
            const response = await axiosInstance.post('/token/refresh/', { refresh: refresh_token });
            const { access } = response.data;

            localStorage.setItem('access_token', access);

            originalRequest.headers['Authorization'] = `Bearer ${access}`;

            // Retry the original request with the new access token
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            console.error('Error refreshing token:', refreshError);
            isRefreshing = false;
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            // Reject the failed requests
            refreshFailedRequests.forEach((failedRequest) => {
              failedRequest.reject(refreshError);
            });
            refreshFailedRequests = [];
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }
      } else {
        // If refreshing, queue the failed request
        return new Promise((resolve, reject) => {
          refreshFailedRequests.push({ resolve, reject });
        }).then(() => {
          return axiosInstance(originalRequest);
        });
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;