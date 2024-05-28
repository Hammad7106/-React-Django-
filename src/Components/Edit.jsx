import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    post_title: '',
    post_content: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/posts/${id}/`);
        setFormData({
          post_title: response.data.post_title,
          post_content: response.data.post_content,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching post data', error);
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve user ID from local storage
      const userId = localStorage.getItem('userId');

      // Add user ID to the formData object
      const updatedFormData = {
        ...formData,
        user: userId,
      };

      // Send the PUT request with the updated formData
      await axios.put(`http://127.0.0.1:8000/posts/${id}/`, updatedFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Post updated successfully!');
      navigate('/postslist');
    } catch (error) {
      console.error('Error updating post', error);
      alert('Failed to update post.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      {isLoading ? (
        <p className="text-gray-600">Loading post...</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label htmlFor="post_title" className="block mb-2 text-sm font-medium text-black">
            Post Title
          </label>
          <input
            type="text"
            id="post_title"
            name="post_title"
            value={formData.post_title}
            onChange={handleChange}
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-200 placeholder-gray-400 text-black focus:ring-green-500 focus:border-green-500 mb-4"
          />

          <label htmlFor="post_content" className="block mb-2 text-sm font-medium text-black">
            Post Content
          </label>
          <textarea
            id="post_content"
            name="post_content"
            value={formData.post_content}
            onChange={handleChange}
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-200 placeholder-gray-400 text-black focus:ring-green-500 focus:border-green-500 h-40 resize-none mb-4"
          />

          <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded block w-full">
            Update Post
          </button>
        </form>
      )}
    </div>
  );
}

export default EditPost;
