import React, { useState } from 'react';
import { registerUser } from '../services/api';

function UserForm() {
  const [userData, setUserData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await registerUser(userData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      <button type="submit">Register</button>
    </form>
  );
}

export default UserForm;
