import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );

}
export default Contact;