'use client';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use(
  request => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401 && error.response.data.code === '2000') {
      fetch('/api/auth/reissue', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.code === '0000') {
          localStorage.setItem('accessToken', data.data.accessToken);
          alert("다시 시도해주세요");
        } else {
          alert("다시 로그인해주세요");
          location.href = '/signup';
        }
      })
    }

    return Promise.reject(error);
  }
);



export default axiosInstance;