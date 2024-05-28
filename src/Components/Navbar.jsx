import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">MyApp</div>
        <div className="space-x-4">
          <Link to="/signup" className="text-gray-300 hover:text-white">
            Sign Up
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link to="/posts" className="text-gray-300 hover:text-white">
            Create Post
          </Link>
          
          <Link to="/postslist" className="text-gray-300 hover:text-white">
            Posts List
          </Link>
          <Link to="/logout" className="text-gray-300 hover:text-white">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
