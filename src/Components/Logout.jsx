import React, { useState } from 'react';
import axios from 'axios';

function PostsList() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/logout/');
      console.log(response.data); // Handle successful logout response
      // Clear user ID from local storage
      localStorage.removeItem('userId');
      // Redirect to login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Posts List</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Logout
        </button>
      </div>
      {/* Rest of the component */}
    </div>
  );
}

export default PostsList;
