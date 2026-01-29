function Survey() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, age, color, recommend, button } = form.elements;

    if (!name.value) return alert('Name is required!');

    if (!age.value) return alert('Age is required!');

    const ageNum = parseInt(age.value, 10);
    if (Number.isNaN(ageNum) || ageNum < 0 || ageNum > 110) return alert('Age has to be a number between 0 and 110');

    if (!color.value) return alert('Color is required!');

    const surveyData = {
      name: name.value.trim(),
      age: ageNum,
      color: color.value,
      recommend: recommend.checked,
    };
    console.log(surveyData);
    alert('Thanks for filling the survey!');
    form.reset();
    setTimeout(() => (button.disabled = true), 3000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name: <input type='text' id='name' name='name' />
      </label>
      <label htmlFor='age'>
        Age: <input type='text' inputMode='numeric' id='age' name='age' />
      </label>
      <label htmlFor='color'>
        Favorite Color:
        <select name='color' defaultValue=''>
          <option value='' disabled>
            Select...
          </option>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
        </select>
      </label>
      <fieldset>
        <legend>Would you recommend our site?</legend>
        <label htmlFor='recommend' className='checkbox'>
          <input type='checkbox' id='recommend' name='recommend' /> I would recommend this site
        </label>
      </fieldset>
      <button name='button' type='submit'>
        Send
      </button>
    </form>
  );
}

export default Survey;
