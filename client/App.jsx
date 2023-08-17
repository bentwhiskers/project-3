import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>

      <br />
     
      <main className="mx-3">
        <Outlet />
      </main>


    </>
  )
}

export default App;


