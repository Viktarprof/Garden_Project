import React from "react";
import s from "./CategoryItem.module.css";
import { NavLink } from "react-router-dom";

function CategoryItem({ id, title, image }) {
  const baseUrl = "http://localhost:3333/";

  return (
    <div className={s.categoryItem}>
      <NavLink to={`/categories/${id}`}>
        <img src={`${baseUrl}${image}`} alt={title} />
      </NavLink>
      <p>{title}</p>
    </div>
  );
}

export default CategoryItem;
