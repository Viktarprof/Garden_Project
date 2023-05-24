import React, { useEffect } from "react";
import ImageZoom from "react-image-zoom";
import s from "./Product.module.css";
import Button from "../UI/Button/Button";

function Product({ title, image, price, discont_price, description }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const baseUrl = "http://localhost:3333/";
  const newDiscontPrice = Math.floor(discont_price);
  const discount = Math.floor(((newDiscontPrice - price) / newDiscontPrice) * 100);

  const priceElement = discont_price ? (
    <>
      <p>
        {newDiscontPrice}
        <span>$</span>
      </p>
      <p>{price}$</p>
      <p>{discount}%</p>
    </>
  ) : (
    <>
    <p>{price} <span>$</span></p>
    </>
    
  );

  const zoomProps = {
    width: 710,
    height: 710,
    // zoomWidth: 710,
    img: `${baseUrl}${image}`,
    zoomPosition: "original",
  };

  return (
    <div className={s.infoContainer}>
      <h2>{title}</h2>
      <div className={s.info}>
        <div className={s.imageContainer}>
          <ImageZoom {...zoomProps} />
        </div>
        <div>
          <div className={s.price}>{priceElement}</div>
          <Button title={"To cart"} styles={"toCart"} />
          <div className={s.dashed}></div>
          <div className={s.description}>
            <p>Description</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
