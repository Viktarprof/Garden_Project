import React, { useEffect } from "react";
import s from "./CategoryProductsList.module.css";
import ProductItem from "../ProductItem/ProductItem";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Filters from "../Filters/Filters";

function CategoryProductsList({ products, title}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  if (products.length === 0) {
    return <NotFoundPage />;
  }
  return (
    <div className={s.categoryListProduct}>
      <h2>{title}</h2>
      <Filters showFilter={true}/>
      <div className={s.categoryContainer}>
        {products.map((el) => <ProductItem key={el.id} {...el}/>)}
      </div>
    </div>
  );
}

export default CategoryProductsList;
