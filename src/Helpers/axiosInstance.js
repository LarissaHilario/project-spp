import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://18.116.180.141',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
});
