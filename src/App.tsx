import { Routes, Route, NavLink } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { ProductsDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { NotFound } from './components/NotFound';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;


function App() {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/cart">CartPage</StyledLink>
        <StyledLink to="/detail">ProductsDetailPage</StyledLink>
        <StyledLink to="/product">ProductsPage</StyledLink>
      </nav>


      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/detail" element={<ProductsDetailPage />}/>
        <Route path="/product" element={<ProductsPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
