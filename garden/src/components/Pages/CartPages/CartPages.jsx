import React, { useEffect, useState } from "react";
import s from "./CartPages.module.css";
import Button from "../../UI/Button/Button";
import arrowRigth from "./media/arrowRigth.png";
import Form from "../../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../CartList/CartList";
import { order_send_req } from "../../../asyncActions/requests_products";
import { clearCartAction } from "../../../store/cartReducer";
import { NavLink } from "react-router-dom";

function CartPages() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    document.title = 'Garden: Shopping cart';
  }, ['Garden: Shopping cart']);

  const submitForm = (event) => {
    event.preventDefault();
    if (cart.length === 0) {
      return alert('Your cart is empty!'); // Если корзина пустая, то alert
    }
    
    const { phone } = event.target;
    const order = {
      id: Date.now(),
      phone: phone.value,
      totalPrice: total,
      products: cart,
    };

    console.log(order);
    order_send_req(order);
    dispatch(clearCartAction());
    setModal(true);
    event.target.reset();
  };
  
  const closeModal = () => {
    setModal(false); // отключаю модальное окно
  };

  const total = cart
    .reduce((acc, item) => acc + item.count * item.price, 0)
    .toFixed(2);

  return (
    <div className={s.cartContainer}>
      <h2>Shopping cart</h2>
      <div className={s.toBackStore}>
        <NavLink to="/allProducts">
          <Button styles="toBackStore" title={"Back to the store "} />
        </NavLink>
        <img width={7} height={13} src={arrowRigth} alt="arrowRigth" />
      </div>

      <div className={s.orderContainer}>
        <div className={s.testCONTAINER}>
          {cart.length !== 0 ? <CartList /> : <p className="productsResult">Your cart is empty!</p>}
        </div>

        <div className={`${s.orderDetail} ${s.stickyOrderDetail}`}>
          <p>Order details</p>
          <div className={s.total}>
            <p>Total</p>
            <p>{total}</p>
          </div>
          <Form
            submit={submitForm}
            type="text"
            placeholder={"Phone number"}
            name="phone"
            styles={"inputOrder"}
            regexp={/^\+\d{10}$/}
            stylesBtn={"orderBtn"}
            title={"Order"}
          />
        </div>
      </div>

      {modal && (
        <div className={s.modalBackdrop}>
          <div className={s.modal}>
            <h3>Your order is accepted.</h3>
            <Button
              onClick={closeModal}
              title={"Close"}
              styles={"closeModal"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPages;
