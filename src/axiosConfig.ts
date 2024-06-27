// src/axiosConfig.ts
import axios from 'axios';

export const GetAllRoles = async () => {
    const baseURL= process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseURL}role/getList`);
    return response.data;
  };
