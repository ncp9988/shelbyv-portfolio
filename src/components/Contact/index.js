import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h2 data-testid="h1tag">Contact me</h2>
      <form id="contact-form" className='mx-5' onSubmit={handleSubmit}>

        <div class="input-group input-group-lg mb-3">
          <label class="input-group-text" id="inputGroup-sizing-lg" htmlFor="name">Name:</label>
          <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>

        <div class="input-group input-group-lg mb-3">
          <label class="input-group-text" id="inputGroup-sizing-lg" htmlFor="email">Email address:</label>
          <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>

        <div class="input-group input-group-lg mb-3">
          <label class="input-group-text" id="inputGroup-sizing-lg" htmlFor="message">Message:</label>
          <textarea class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" class="btn btn-dark" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;