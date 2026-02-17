import { UserProfile, Button, UserList, Form } from './components';
import { user } from './data';

function App() {
  return (
    <div className='container flex flex-col items-center p-4 gap-3'>
      <h1 className='text-2xl font-bold mb-4'>Typescript in React</h1>
      {/* <UserProfile username={user.username} image={user.image} info={user.info} status={user.status} />
      <UserList />
      <Button
        type='button'
        className='extra-class'
        variant='secondary'
        onClick={() => alert('Button clicked!')}
        title='Click Me!'
      /> */}
      <Form />
    </div>
  );
}

export default App;
