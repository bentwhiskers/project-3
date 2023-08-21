
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin: 0 auto;
  border: 5px solid #F4A259;
  border-radius: 35%;
  padding: 1.5em;
  color: white;
  font-weight: bold;
  
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

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('server/routes/api/loginRoutes.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem('token', data.token); // Store the token
            alert('Logged in successfully!');
            // Redirect or update the state
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <Header/>
            <h2 css={{ color: 'white', fontSize: '2rem' }}>Login</h2>
            <StyledForm onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <br></br>
                <StyledButton type="submit">Login</StyledButton>
            </StyledForm>
            <Footer/>
        </div>
    );
};

export default Login;
