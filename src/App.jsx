import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import Login from './components/login'; // Check the filename and capitalization
import Signup from './components/signup'; // Check the filename and capitalization

function App() {
  return (
    <>
      <Signup />
      <br />
     
      <main className="mx-3">
        <Outlet />
      </main>

      <Login />
    </>
  );
}

export default App;


