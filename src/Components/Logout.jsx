// src/Components/Logout.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.post('http://127.0.0.1:8000/logout/', {}, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // Remove any user-related data from localStorage or state
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        localStorage.removeItem('userData');

        // Redirect to login page
        navigate('/login');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    performLogout();
  }, [navigate]);

  return null;
};

export default Logout;
