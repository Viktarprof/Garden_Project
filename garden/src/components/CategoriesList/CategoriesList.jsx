import s from "./CategoriesList.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "../../asyncActions/categories";
import CategoryItem from "../CategoryItem/CategoryItem";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";

function CategoriesList({ title, showItems, styles, showBtn }) {
  const dispatch = useDispatch();
  const allCategory = useSelector((store) => store.allCategory);

  useEffect(() => {
    dispatch(load_categories);
  }, [dispatch]);

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
        {allCategory.slice(0, showItems).map((el) => (
          <CategoryItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
