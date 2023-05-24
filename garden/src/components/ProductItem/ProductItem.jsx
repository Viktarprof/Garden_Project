import React from "react";
import s from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";

function ProductItem({ id, title, image, price, discont_price }) {
  const baseUrl = "http://localhost:3333/";

  const newDiscontPrice = Math.floor(discont_price);
  const discount = Math.floor(
    ((newDiscontPrice - price) / newDiscontPrice) * 100
  );

  const priceElement = discont_price ? (
    <>
      <p>{newDiscontPrice}$</p>
      <p>{price}$</p>
      <p>{discount}%</p>
    </>
  ) : (
    <p>{price}$</p>
  );

  return (
    <div className={s.productItem}>
  <NavLink to={`/products/${id}`}>
    <img width={319} src={`${baseUrl}${image}`} alt={title} />
  </NavLink>
  <div className={`${s.addToCart}`}>
    <Button title={"To cart"} styles={'addToCart'}/>
  </div>
  <div className={s.price}>{priceElement}</div>
  <p>{title}</p>
</div>
  );
}

export default ProductItem;
