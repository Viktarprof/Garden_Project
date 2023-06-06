import React, { useEffect } from "react";
import s from "./CategoryProductsList.module.css";
import ProductItem from "../ProductItem/ProductItem";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Filters from "../Filters/Filters";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";


function CategoryProductsList({ location, products, title }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  useEffect(() => {
    document.title = title;
  }, [title]);


  products = products.filter((el) => el.showProductsSale && el.rangeVisible);

  return (
    <div className={s.categoryListProduct}>
      <h2>{title}</h2>
      <Filters 
        showCheckbox={true}
        location={location}
      />
      <div className={s.categoryContainer}>
        { products.length === 0 ? <p>Products not found </p> : products.map((el) => <ProductItem key={el.id} product={el}/>)}
      </div>
    </div>
  );
}

export default CategoryProductsList;


