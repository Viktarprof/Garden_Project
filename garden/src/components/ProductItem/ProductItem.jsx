import React, { useEffect } from "react";
import s from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";
import { addToCartAction, incrCountAction } from "../../store/cartReducer";
import { useDispatch } from "react-redux";

function ProductItem({ product }) {

  const { id, title, image, price, discont_price } = product;

  const baseUrl = "http://localhost:3333/";
  const dispatch = useDispatch();

  const newDiscontPrice = Math.floor(discont_price);
  const discount = Math.floor(((newDiscontPrice - price) / newDiscontPrice) * 100
  );

  const priceElement = discont_price ? (
    <>
      <p>{newDiscontPrice}$</p>
      <p>{price}$</p>
      <p>{discount}%</p>
    </>
  ) : (
    <p className={s.price}>{price}$</p>
  );

  const addToCartHandler = () => {
    dispatch(addToCartAction(product));
    dispatch(incrCountAction(id));
  }
  return (
    <div className={s.productItem}>
      <NavLink to={`/products/${id}`}>
        <img width={319} src={`${baseUrl}${image}`} alt={title} />
      </NavLink>
      <div className={`${s.addToCart}`}>
        <Button title={"To cart"} styles={"addToCart"} onClick={addToCartHandler} />
      </div>
      <div className={s.price}>{priceElement}</div>
      <p>{title}</p>
    </div>
  );
}

export default ProductItem;
