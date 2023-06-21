import s from "./CategoriesList.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "../../asyncActions/requests_products";
import CategoryItem from "../CategoryItem/CategoryItem";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

function CategoriesList({ title, showItems, styles, showBtn }) {
  const dispatch = useDispatch();
  const allCategory = useSelector((store) => store.allCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(load_categories);
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Garden: ' + title;
  }, [title]);


  const btnAllCategory = 
    showBtn 
      ? (<NavLink to="categories/all">
            <Button 
              showBtn={showBtn} 
              title={"All categories"} 
              styles={"btnAllCategories"} />
          </NavLink>
        ) 
      : null;

  return (
    <div className={s.categoriesContainer}>
      <div className={s.headCatalog}>
        <h1>{title}</h1>
        {btnAllCategory}
      </div>
      <div className={`${s[styles]}`}>
        { allCategory.slice(0, showItems).map((el) => (
          <CategoryItem key={el.id} category={el} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
