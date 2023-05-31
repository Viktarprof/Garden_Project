import React, { useEffect } from "react";
import s from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load_products } from "../../asyncActions/requests_products";
import ProductItem from "../ProductItem/ProductItem";
import Filters from "../Filters/Filters";

function ProductsList({
  location,
  title,
  styles,
  showItems,
  showSale,
  showCheckbox,
  onChange,
}) {
  
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.allProducts).filter(
    (el) => el.showProductsSale && el.rangeVisible
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(load_products);
  }, []);

  let showSaleProducts = allProducts;
  if (showSale) {
    showSaleProducts = allProducts
      .filter((el) => el.discont_price)
      .slice(0, showItems);
  }

  return (
    <div className={`${s[styles]}`}>
      <h2>{title}</h2>
      <Filters
        showCheckbox={showCheckbox}
        onChange={onChange}
        location={location}
      />
      <div className={s.productsList}>
        {showSaleProducts.map((el) => (
          <ProductItem key={el.id} {...el} product={el} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
