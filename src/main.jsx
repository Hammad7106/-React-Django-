import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Logout from './Components/Logout.jsx'
import Welcome from './Components/Welcome.jsx'
import Posts from './Components/Posts.jsx'
import PostsList from './Components/PostsList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

        <Route path="/" element={<Signup />} /> {/* Set the default route to Signup component */}
        <Route path="/signup" element={<Signup />} /> {/* Route for Signup component */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/posts" element={<Posts/>} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/postslist' element={<PostsList/>} />

    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
