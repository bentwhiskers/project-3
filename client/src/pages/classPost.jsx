import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin: 0 auto;
  border: 5px solid #F4A259;
  border-radius: 35%;
  padding: 2.5em;
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

function ClassPost() {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    date: '',
    option: 'buy',
    hashtags: ''
  });

  const { title, description, date, option, hashtags } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
   
      console.log('Submit Form', formState);
    
  };

  const handleChange = (e) => {
    
    
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
 
  };

  return (
    <section>
      <StyledForm id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            name="title"
            value= {title}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="email">Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date: </label>
          <textarea
            name="date"
            defaultValue={date}
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="option">Option: </label>
          <select name='option' value={option} onChange = {handleChange}>
          <option value= 'buy'>
            Buy
          </option>
          <option value='sell'>
            Sell
          </option>

          </select>
        </div>
        <div>
        <label htmlFor="hashtags">Hashtags: </label>
          <textarea
            name="hashtags"
            value={hashtags}
            onChange={handleChange}
          />
        </div>
      
      
      <br></br>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </section>
  );
}

export default ClassPost;