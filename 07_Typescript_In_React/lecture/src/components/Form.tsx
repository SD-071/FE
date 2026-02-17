import { Button } from '.';
import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';

type FormData = {
  username: string;
  email: string;
  theme: string;
  stayLoggedIn: boolean;
};

function Form() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    theme: 'Select a theme',
    stayLoggedIn: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submited: " + JSON.stringify(formData))
  }
  console.log(formData)

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 bg-neutral p-4 rounded'>
      <input
        onChange={handleChange}
        value={formData.username}
        className='input input-neutral'
        type='text'
        id='username'
        name='username'
        placeholder='Username...'
      />
      <input
        onChange={handleChange}
        value={formData.email}
        className='input input-neutral'
        type='email'
        id='email'
        name='email'
        placeholder='Email...'
      />
      <select
        onChange={handleChange}
        value={formData.theme}
        className='select select-neutral'
        name='theme'
        id='theme'
      >
        <option disabled>
          Select a theme
        </option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='system'>System</option>
      </select>
      <label className='label text-base-200' htmlFor='stayLoggedIn'>
        <input
          onChange={handleChange}
          checked={formData.stayLoggedIn}
          className='checkbox checkbox-neutral border-base-200'
          type='checkbox'
          id='stayLoggedIn'
          name='stayLoggedIn'
        />
        Stay Logged In
      </label>
      <Button type='submit' variant='secondary' title='Submit' />
    </form>
  );
}

export default Form;
