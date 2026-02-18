import { UserProfile, UserList, Form, ProductsList, ProductsDetails } from './components';
import { user } from './data';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className='flex justify-center items-center gap-2'>
        <Link to='/'>Home</Link>
        <Link to='/form'>Form</Link>
        <Link to='/user-list'>Users list</Link>
        <Link to='/products'>Products</Link>
      </nav>
      <div className='container flex flex-col items-center p-4 gap-3'>
        <h1 className='text-2xl font-bold mb-4'>Typescript in React</h1>
        <Routes>
          <Route
            path='/'
            element={<UserProfile username={user.username} image={user.image} info={user.info} status={user.status} />}
          />
          <Route path='/form' element={<Form />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/products/:id' element={<ProductsDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
