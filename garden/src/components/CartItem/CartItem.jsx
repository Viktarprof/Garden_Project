import React from "react";
import s from "./CartItem.module.css";
import Button from "../UI/Button/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { decrCountAction, dellProductAction, incrCountAction } from "../../store/cartReducer";
import { useDispatch } from "react-redux";

function CartItem({ product }) {
  const { id, title, image, count, discont_price, price } = product
  
  const baseUrl = "http://localhost:3333";
  let dispatch = useDispatch();

  const newDiscontPrice = Math.round(discont_price);
  const newPrice = Math.round(price);

  const priceElement = discont_price ? (<>
                                          <p className={s.newPrice}>
                                            {newDiscontPrice.toFixed(2)}
                                            <span>$</span>
                                          </p>
                                          <p className={s.oldPrice}>{newPrice}$</p>
                                        </>) 
                                      : (<p className={s.newPrice}>
                                            {newPrice.toFixed(2)}
                                            <span>$</span>
                                          </p>);

  return (
    <div className={s.itemContainer}>
      <img width={193} src={`${baseUrl}${image}`} alt={title} />
      <div className={s.counter}>
        <p>{title}</p>
        <div className={s.btnTriggers}>
          <Button onClick={() => dispatch(decrCountAction(id))} title={<AiOutlineMinus />} styles={"btnMinus"} />
          <p>{count}</p>
          <Button onClick={() => dispatch(incrCountAction(id))} title={<AiOutlinePlus />} styles={"btnPlus"} />
        </div>
      </div>
      <div className={s.priceContainer}>{priceElement}</div>

      <Button onClick={() => dispatch(dellProductAction(id))} title={<HiXMark />} styles={"xMark"} />
    </div>
  );
}

export default CartItem;
