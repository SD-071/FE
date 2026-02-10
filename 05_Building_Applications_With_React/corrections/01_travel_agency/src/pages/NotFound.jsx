import gif404 from '../assets/404.gif';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={gif404} alt='404 Not Found' className='w-64 h-64 mb-6' />
      <h1 className='text-4xl font-bold text-error mb-2'>Page Not Found</h1>
      <p className='text-lg text-base-content mb-6'>Sorry, the page you are looking for doesn't exist.</p>
      <a href='/' className='btn btn-primary'>
        Go Home
      </a>
    </div>
  );
};

export default NotFound;