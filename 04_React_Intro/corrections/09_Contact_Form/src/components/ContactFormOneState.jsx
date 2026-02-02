function ContactFormOneState({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, tel, message} = formData;
    if (!name || !email || !tel || !message) return alert('All fiels must be filled!');
    console.log(formData);
    setFormData({name: "", email: "", tel: "", message: ""});
};
 
  return (
    <form onSubmit={handleSubmit} className='form'>
      <label className='label' htmlFor='name'>
        Name:{' '}
        <input onChange={handleChange} value={formData.name} className='input' type='text' id='name' name='name' />
      </label>
      <label className='label' htmlFor='email'>
        Email:{' '}
        <input onChange={handleChange} value={formData.email} className='input' type='email' id='email' name='email' />
      </label>
      <label className='label' htmlFor='telephone'>
        Telephone:{' '}
        <input onChange={handleChange} value={formData.tel} className='input' type='tel' id='telephone' name='tel' />
      </label>
      <label className='label' htmlFor='message'>
        Message:{' '}
        <textarea
          onChange={handleChange}
          value={formData.message}
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

export default ContactFormOneState;
