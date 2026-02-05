export const loginAction = async (prevState, formData) => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!registeredUser) return alert('User does not exist!');
    if (user.email !== registeredUser.email) return alert('user not found!');
    if (user.password !== registeredUser.password) return alert('password does not match email!');

    localStorage.setItem('token', JSON.stringify(user.email + user.password));
    return { success: true, message: 'You are logged in!', token: user.email + user.password };
  } catch (err) {
    return { error: err.message };
  }
};
