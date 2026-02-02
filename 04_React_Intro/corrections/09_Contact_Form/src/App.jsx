import ContactForm from './components/ContactForm.jsx';
import PopUp from './components/PopUp.jsx';
import ContactFormOneState from './components/ContactFormOneState.jsx';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({name: "", email: "", tel: "", message: ""})

  return (
    <div className='app'>
      <div className='formContainer'>
        <h2 className='h2'>Contact us...</h2>
        {/* <ContactForm name={name} setName={setName} email={email} setEmail={setEmail} tel={tel} setTel={setTel} message={message} setMessage={setMessage} /> */}
        <ContactFormOneState formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

export default App;
