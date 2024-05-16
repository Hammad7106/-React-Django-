import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/posts/');
        setPosts(response.data);
        setIsLoading(false);
        
        // Fetch user ID from local storage
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
          setUserId(parseInt(storedUserId));
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/posts/${postId}/`);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = (postId) => {
    console.log(`Editing post with ID ${postId}`);
    window.location.href = `/posts/${postId}/edit`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Posts List</h2>
      {isLoading ? (
        <p className="text-gray-600">Loading posts...</p>
      ) : posts && Array.isArray(posts) && posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id} className="bg-white shadow-md rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">{post.post_title}</h3>
              <p className="text-gray-600">{post.post_content}</p>
              <div className="mt-4 flex">
                {userId === post.user ? (
                  <>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Edit
                    </button>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No posts found.</p>
      )}
    </div>
  );
}

export default PostsList;
