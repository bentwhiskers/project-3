import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';


function App() {
  return (
    <>
      
      <br />
     
      <main className="mx-3">
        <Outlet />
      </main>

     
    </>
  );
}

export default App;


