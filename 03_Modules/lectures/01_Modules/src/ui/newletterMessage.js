const createNewsletterMessage = () => {
  const newsletterContainer = document.createElement('div');
  newsletterContainer.className =
    'fixed top-4 mx-auto inset-0 max-h-fit bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64 z-50';

  const message = document.createElement('p');
  message.textContent = 'Subscribe to our newsletter for the latest updates!';
  message.className = 'text-gray-800 text-sm mb-2';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.className = 'text-white bg-red-500 hover:bg-red-600 focus:ring-4 px-2 py-1 rounded-md text-xs font-bold';

  closeButton.addEventListener('click', () => {
    newsletterContainer.remove();
  });

  const form = document.createElement('form');
  form.className = 'flex flex-col';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Enter your email';
  inputEmail.className = 'w-full mb-2 p-1 border border-gray-300 rounded-md text-sm';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Subscribe';
  submitButton.className =
    'text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 px-2 py-1 rounded-md text-xs font-bold';
  submitButton.type = 'submit';
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    console.log(`Subscribed with email: ${email}`);
    message.textContent = 'Thank you for subscribing!';
    newsletterContainer.remove();
  });
  
  form.appendChild(inputEmail);
  form.appendChild(submitButton);

  newsletterContainer.appendChild(form);

  newsletterContainer.appendChild(message);
  newsletterContainer.appendChild(closeButton);

  document.body.appendChild(newsletterContainer);
};

export default createNewsletterMessage;
