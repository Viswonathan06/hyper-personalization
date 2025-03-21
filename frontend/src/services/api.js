import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Your Flask backend URL
});

const registerUser = async (userData) => {
  try {
    const response = await api.post('api/users/register', userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { registerUser };
