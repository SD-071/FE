function ContactForm({ name, setName, email, setEmail, tel, setTel, message, setMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !tel || !message) return alert('All fiels must be filled!');
    const formData = {
      name,
      email,
      tel,
      message,
    };
    console.log(formData);
    setName("")
    setEmail("")
    setTel("")
    setMessage("")
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <label className='label' htmlFor='name'>
        Name:{' '}
        <input
          onChange={(e) => setName(e.target.value.trim())}
          value={name}
          className='input'
          type='text'
          id='name'
          name='name'
        />
      </label>
      <label className='label' htmlFor='email'>
        Email:{' '}
        <input
          onChange={(e) => setEmail(e.target.value.trim())}
          value={email}
          className='input'
          type='email'
          id='email'
          name='email'
        />
      </label>
      <label className='label' htmlFor='telephone'>
        Telephone:{' '}
        <input
          onChange={(e) => setTel(e.target.value.trim())}
          value={tel}
          className='input'
          type='tel'
          id='telephone'
          name='tel'
        />
      </label>
      <label className='label' htmlFor='message'>
        Message:{' '}
        <textarea
          onChange={(e) => setMessage(e.target.value.trim())}
          value={message}
          className='textarea'
          name='message'
          id='message'
        ></textarea>
      </label>
      <button className='button' type='submit'>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
