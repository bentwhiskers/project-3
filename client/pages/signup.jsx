import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin: 0 auto;
  color: white;
  font-weight: bold;
  border: 5px solid #F4A259;
  border-radius: 35%;
  width: 25%;
`;

const StyledButton = styled.button`
  padding: 1em;
  background-color: #BC4B51;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  curson: pointer;

  &:hover {
    background-color: white;
    border: 2px solid #BC4B51;
    color: #BC4B51;
    font-weight: bold;
  }
`;


function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('server/routes/api/signupRoutes.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setEmail('');
        setPassword('');
        //window.location.href = '/login';
        // Handle success, maybe redirect to another page
        console.log('User registered successfully');
      } else {
        // Handle error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    
    <div>
    
    <Header/>

      <h2 css={{ color: 'white', fontSize: '2em' }}>Sign-Up</h2>

      <StyledForm onSubmit={handleSubmit}>

        <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          <StyledButton type="submit">Sign Up</StyledButton>
            
        </StyledForm>
        <Footer />
    </div>
  );
}

export default SignupForm;




