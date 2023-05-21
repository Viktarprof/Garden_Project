import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import ProductsListPages from './components/Pages/ProductsListPages/ProductsListPages';
import SalesPages from './components/Pages/SalesPages/SalesPages';
import NavMenu from './components/NavMenu/NavMenu';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import CartPages from './components/Pages/CartPages/CartPages';
import CategoriesPages from './components/Pages/CategoriesPages/CategoriesPages';
import AllProducts from './components/Pages/AllProducts/AllProducts';

function App() {
  return (
    <div className='wrapper'>
      <NavMenu/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="categories/all" element={<CategoriesPages/>} />
        <Route path="/allProducts" element={<AllProducts/>} />
        <Route path="/allSales" element={<SalesPages/>}/>
        <Route path="/cart" element={<CartPages/>} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
