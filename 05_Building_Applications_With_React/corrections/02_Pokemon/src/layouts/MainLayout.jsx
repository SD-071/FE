import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto p-5'>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
