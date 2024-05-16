import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username,
        password
      });
      // Assuming the backend response includes the user ID
      const userId = response.data.id; // Extract user ID from the response

      // Store user ID in local storage or state for future use
      localStorage.setItem('userId', userId);

      const userData = response.data;
      // Store user data in local storage for future use
      localStorage.setItem('userData', JSON.stringify(userData));
           
      // Redirect to posts page
      window.location.href = '/posts';
    } catch (error) {
      setError(error.response.data.error || 'An error occurred during login');
      console.error(error.response.data); // Handle login error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              value={username}
              onChange={handleUsernameChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
