import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/about.jsx';
import Error from './pages/error.jsx';
import Events from './pages/events.jsx';
import Guidelines from './pages/guidelines.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Spotlight from './pages/spotlight.jsx';

// Defining accessible routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'guidelines',
        element: <Guidelines />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'spotlight',
        element: <Spotlight />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
