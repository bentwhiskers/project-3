import { useState } from 'react';


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
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">title:</label>
          <input
            type="text"
            name="title"
            value= {title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <textarea
            name="date"
            defaultValue={date}
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="option">Option:</label>
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
        <label htmlFor="hashtags">Hashtags:</label>
          <textarea
            name="hashtags"
            value={hashtags}
            onChange={handleChange}
          />
        </div>
      
      
      
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ClassPost;