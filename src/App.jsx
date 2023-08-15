import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';


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
  )
}

export default App;


