import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import SalesPages from './components/Pages/SalesPages/SalesPages';
import NavMenu from './components/NavMenu/NavMenu';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import CategoriesPages from './components/Pages/CategoriesPages/CategoriesPages';
import AllProducts from './components/Pages/AllProductsPages/AllProducts';
import CategoriesInfoPages from './components/Pages/CategoriesInfoPages/CategoriesInfoPages';
import ProductInfoPage from './components/Pages/ProductInfoPage/ProductInfoPage';
import CartPages from './components/Pages/CartPages/CartPages';


function App() {
  return (
    <div className='wrapper'>
      <NavMenu/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="categories/all" element={<CategoriesPages/>} />
        <Route path="/allProducts" element={<AllProducts/>} />
        <Route path="/allSales" element={<SalesPages/>}/>
        <Route path="/categories/:id" element={<CategoriesInfoPages/>} />
        <Route path="/products/:id" element={<ProductInfoPage/>} />
        <Route path="/cart" element={<CartPages/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

