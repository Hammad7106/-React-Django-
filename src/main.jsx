import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Components/Layout.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import Logout from './Components/Logout.jsx';
import Welcome from './Components/Welcome.jsx';
import Posts from './Components/Posts.jsx';
import PostsList from './Components/PostsList.jsx';
import EditPost from './Components/Edit.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Signup />} /> {/* Default route to Signup component */}
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="posts" element={<Posts />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="postslist" element={<PostsList />} />
      <Route path="posts/:id/edit" element={<EditPost />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
