import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet, useNavigate } from "react-router-dom"

function MainLayout({setToken}) {
  const navigate = useNavigate();
  return (
    <div className='grid min-h-screen w-full'>
      <header className='w-full bg-gray-800 text-white h-12 flex items-center'>
        <Navbar setToken={setToken} />
      </header>
      <main className="min-h-[85vh] p-4 flex flex-col items-center gap-4">
        <div className="flex gap-4 mb-4">
          <button className="bg-blue-500 rounded py-1 px-2" onClick={() => navigate(-1)}>Prev</button>
          <button className="bg-blue-500 rounded py-1 px-2" onClick={() => navigate(1)}>Next</button>
        </div>

        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout