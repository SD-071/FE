import { useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import { fetchCategories } from '../server';
import { useProducts } from '../contexts';
import { Button } from '.';

function Categories() {
  const navigate = useNavigate();
  const { setCategories, setError, setLoading, categories } = useProducts();

  useEffect(() => {
    fetchCategories(setCategories, setError, setLoading);
  }, []);
  return (
    <nav className='navbar'>
    
      <ul className='menu menu-horizontal items-center gap-2 px-1'>
      <Button text="All" onClick={() => navigate("/")} />
        {categories.map(c => <Button text={c} onClick={() => navigate(`/categories/${c}`)} />)}
      </ul>
    </nav>
  );
}

export default Categories;
