import React, { useEffect } from 'react';
import s from './ProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { load_products } from '../../asyncActions/categories';
import ProductItem from '../ProductItem/ProductItem';
import Filters from '../Filters/Filters';


function ProductsList({ title, styles, showItems, showSale, showCheckbox, onChange }) {

  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.allProducts).filter(el => el.showProductsSale && el.rangeVisible);
  console.log(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(load_products);
  }, []);

  let showSaleProducts = allProducts; 
  if (showSale) {
    showSaleProducts = allProducts
      .filter((el) => el.discont_price)// фильтрую по скидке, 
      .sort(() => Math.random() - 0.5) //сортирую рамдомного
      .slice(0, showItems) // отображаю только 3
  }

  return (
    <div className={`${s[styles]}`}>
      <h2>{title}</h2>
      <Filters 
        showCheckbox={showCheckbox}
        onChange={onChange}/>
      <div className={s.productsList}>
        {showSaleProducts.map((el) => (
          <ProductItem 
            key={el.id} 
            {...el}
            product={el} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;