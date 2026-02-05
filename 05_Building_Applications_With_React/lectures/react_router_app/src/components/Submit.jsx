import { useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className='bg-blue-500 rounded px-2 py-1 self-center' disabled={pending}>
      {pending ? 'Logging...' : 'Login'}
    </button>
  );
}
export default Submit;
