import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/Button';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (!username) return alert('You must enter an username!');
    if (!email) return alert('You must enter an email!');
    if (!password) return alert('You must enter a password!');
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className='w-[85%] grid bg-neutral-700 rounded px-4 py-8 place-items-center gap-10'>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 px-4'>
        <input
          onChange={handleChange}
          value={formData.username}
          className='px-2 py-1 bg-neutral-200 rounded text-black active:text-black'
          type='text'
          name='username'
          id='username'
          placeholder='Username...'
        />

        <input
          onChange={handleChange}
          value={formData.email}
          className='px-2 py-1 bg-neutral-200 rounded text-black active:text-black'
          type='email'
          name='email'
          id='email'
          placeholder='Email...'
        />

        <input
          onChange={handleChange}
          value={formData.password}
          className='px-2 py-1 bg-neutral-200 rounded text-black active:text-black'
          name='password'
          id='password'
          placeholder='Password...'
        />
        <Button type='submit' className='bg-blue-500 rounded px-2 py-1 self-center' text="Register" />
      </form>
      <div>
        <h3>
          You already have an user?{' '}
          <Button
            text="Login"
            className="text-red-400 rounded p-2 underline cursor-pointer"
            onClick={() => navigate('/login')}
          />
        </h3>
      </div>
    </div>
  );
}

export default Register;
