import { NavBar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='container mx-auto px-4 py-8 mb-auto'>
       <Outlet />
      </main>
        <Footer />
    </div>
  );
};

export default MainLayout;
