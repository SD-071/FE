import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Home, AboutUs, Student, OnePokemon, Login, Register, IsLogin } from './pages';
import { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Paul' },
    { id: 3, name: 'Alice' },
  ]);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    setIsLogin(token ? true : false)
  }, [token]);

  console.log(token)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout setToken={setToken} />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/app' element={<IsLogin isLogin={isLogin} />}>
            <Route path={'/app/about-us'} element={<AboutUs students={students} />} />
            <Route path={'/app/students/:id'} element={<Student students={students} />} />
            <Route path={'/app/pokemon/:name/abilities/:ability'} element={<OnePokemon />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
