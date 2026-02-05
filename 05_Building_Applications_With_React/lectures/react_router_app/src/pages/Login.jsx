import { useNavigate } from 'react-router-dom';
import { useActionState, useEffect } from 'react';
import Submit from '../components/Submit';
import Button from '../components/Button';
import { loginAction } from '../Server/FormActions';

function Login({setToken}) {
  const navigate = useNavigate();
  const [state, action] = useActionState(loginAction, null);

  useEffect(() => {
    if(state?.success) {
      setToken(state?.token)
    }
  }, [state])

  return (
    <div className='w-[85%] grid bg-neutral-700 rounded px-4 py-8 place-items-center gap-10'>
      <form action={action} className='w-full flex flex-col gap-4 px-4'>
        <input
          className='px-2 py-1 bg-neutral-200 rounded text-black active:text-black'
          type='email'
          name='email'
          id='email'
          placeholder='Email...'
          required
        />

        <input
          className='px-2 py-1 bg-neutral-200 rounded text-black active:text-black'
          type='password'
          name='password'
          id='password'
          placeholder='Password...'
          required
        />

        <Submit />
        {state?.error && <p>{state.error}</p>}
        {state?.success && <p>{state.message}</p>}
      </form>
      <div>
        <h3>
          You don't have a user yet?{' '}
          <Button
            text='Register'
            className='text-red-400 rounded p-2 underline cursor-pointer'
            onClick={() => navigate('/register')}
          />
        </h3>
      </div>
    </div>
  );
}

export default Login;
