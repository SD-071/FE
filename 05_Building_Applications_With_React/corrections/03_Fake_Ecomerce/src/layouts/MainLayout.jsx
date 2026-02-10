import { useProducts} from "../contexts";
import { useEffect } from "react";
import {Outlet} from "react-router-dom";
import { fetchProduts } from "../server";
import {Navbar } from "../components";

function MainLayout() {
  const {setProducts, setLoading, setError} = useProducts();

  useEffect(() => {
    fetchProduts(setProducts, setError, setLoading)
  }, [])
  
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
