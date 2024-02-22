import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("I'll get back to you soon!");
  };

  return (
    <div className='contact'>
    <form onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <p>I can be reached at eahatley@gmail.com, as well as through GitHub and LinkedIn.</p>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default Contact;