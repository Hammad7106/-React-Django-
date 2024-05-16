import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user ID from local storage when the component mounts
  useEffect(() => {                                     
    const storedUserId = localStorage.getItem('userId');
    console.log('Retrieved User ID:', storedUserId); // Log the retrieved user ID
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);


  // Fetch username from right after when user logs in 
  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    // Extract the username from user data
    const username = userData ? userData.username : '';
    
    // Set the username state
    setUsername(username);
  }, []);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/posts/', {
        post_title: postTitle,
        post_content: postContent,
        user: userId // Include the user ID in the request payload
      });
      console.log('Post created:', response.data);
      setPostTitle('');
      setPostContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <h2>Welcome, {username}</h2>
      {userId && (
        <p className="text-gray-600 mb-4">User ID: {userId}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="postTitle" className="block text-sm font-semibold text-gray-600">Title:</label>
          <input
            type="text"
            id="postTitle"
            value={postTitle}
            onChange={(event) => setPostTitle(event.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postContent" className="block text-sm font-semibold text-gray-600">Content:</label>
          <textarea
            id="postContent"
            value={postContent}
            onChange={(event) => setPostContent(event.target.value)}
            required
            rows="4"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Post</button>
      </form>
    </div>
  );
}

export default Posts;
