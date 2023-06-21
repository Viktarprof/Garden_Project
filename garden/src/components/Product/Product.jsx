import React, { useEffect } from "react";
import ImageZoom from "react-image-zoom";
import s from "./Product.module.css";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { addToCartAction, incrCountAction } from "../../store/cartReducer";

function Product({ product }) {
  const { id, title, image, price, discont_price, description } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  const dispatch = useDispatch();

  const baseUrl = "http://localhost:3333/";
  const newDiscontPrice = Math.floor(discont_price);
  const discount = Math.floor(
    ((newDiscontPrice - price) / newDiscontPrice) * 100
  );

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
      <p>
        {price} <span>$</span>
      </p>
    </>
  );

  const zoomProps = {
    width: window.innerWidth < 500 ? 360 : window.innerWidth < 901 ? 500 : 710,
    height: window.innerWidth < 500 ? 360 : window.innerWidth < 901 ? 500 : 710,
    img: `${baseUrl}${image}`,
    zoomPosition: "original",
  };
  const addToCartHandler = () => {
    dispatch(addToCartAction(product));
    dispatch(incrCountAction(product.id)); // когда нахожусь на стр продукта и добавляю его то в корзине отображается 1 без него 0
    console.log("test click add product");
  };

  return (
    <div className={s.infoContainer}>
    <h2>{title}</h2>
      <div className={s.info}>
        <div className={s.imageContainer}>
          <ImageZoom {...zoomProps} />
        </div>
        <div className={s.textInfoProduct}>
          <div className={s.price}>{priceElement}</div>
          <Button
            title={"To cart"}
            styles={"toCart"}
            onClick={addToCartHandler}
          />
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
