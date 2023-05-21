import React from "react";
import s from "./CategoryItem.module.css";

function CategoryItem({ title, image }) {
  const baseUrl = "http://localhost:3333/";

  return (
    <div className={s.categoryItem}>
      <img src={`${baseUrl}${image}`} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default CategoryItem;
