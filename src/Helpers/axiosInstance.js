import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://3.132.245.255:1234/',
  headers: {
    'Content-type': 'application/json',
    Authorization : `Bearer ${localStorage.getItem('token')}`
  },
});

