import React, { useEffect } from 'react';
import s from './ProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { load_products } from '../../asyncActions/categories';
import ProductItem from '../ProductItem/ProductItem';


function ProductsList({ title, styles, showItems, showSale }) {

  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.allProducts);

  useEffect(() => {
    dispatch(load_products);
  }, []);

  let showSaleProducts = allProducts;
  if (showSale) {
    showSaleProducts = allProducts
      .filter((el) => el.discont_price)
      .sort(() => Math.random() - 0.5)
      .slice(0, showItems);
     
  }

  return (
    <div className={`${s[styles]}`}>
      <h2>{title}</h2>
      <div className={s.productsList}>
        {showSaleProducts.map((el) => (
          <ProductItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;

