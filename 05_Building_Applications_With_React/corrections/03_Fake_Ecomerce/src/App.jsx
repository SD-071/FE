import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsStates, CartStates, AuthStates } from './contexts';
import { MainLayout, CategoriesLayout } from './layouts';
import { Home, CategoriesProducts } from './pages';
function App() {
  return (
    <Router>
      <ProductsStates>
        <CartStates>
          <AuthStates>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<CategoriesLayout />}>
                  <Route index element={<Home />} />
                  <Route path='/categories/:category' element={<CategoriesProducts />} />
                </Route>
              </Route>
            </Routes>
          </AuthStates>
        </CartStates>
      </ProductsStates>

      <Routes>{/* <Route path='/' element={<MainLayout />}></Route> */}</Routes>
    </Router>
  );
}

export default App;
