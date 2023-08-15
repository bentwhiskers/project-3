import { useState } from 'react';
import axios from 'axios';
import Navbar from "../components/navbar";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data); // Handle successful login here
    } catch (error) {
      console.error(error.response.data); // Handle login error here
    }
  };

  return (
    <div>
      < Navbar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
