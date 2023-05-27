import React, { useEffect } from "react";
import s from "./CartPages.module.css";
import Button from "../../UI/Button/Button";
import arrowRigth from "./media/arrowRigth.png";
import Form from "../../Form/Form";
import { useSelector } from 'react-redux'
import CartList from "../../CartList/CartList";

function CartPages() {
  
  const cart = useSelector(store => store.cart);

  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(cart))
  }, [cart])

  const submite = (event) => {
    event.preventDefault();
    const { phone } = event.target;
    const numberPhone = {
      id: Date.now(),
      phone: phone.value
    }
    console.log(numberPhone);
    event.target.reset()
  }

  

  const total = cart.reduce((acc, item) => acc + item.count * item.price, 0).toFixed(2);

  return (
    <div className={s.cartContainer}>
      <h2>Shopping cart</h2>
      <div className={s.toBackStore}>
        <Button styles="toBackStore" title={"Back to the store "} />
        <img width={7} height={13} src={arrowRigth} alt="arrowRigth" />
      </div>

      <div className={s.orderContainer}>
        <div className={s.testCONTAINER}>
          {cart.length !== 0 
            ? <CartList /> 
            : <p className={s.warning}>Your Cart Is Empty!</p>}
        </div>

        <div className={`${s.orderDetail} ${s.stickyOrderDetail}`}>
          <p>Order details</p>
          <div className={s.total}>
            <p>Total</p>
            <p>{total}</p>
          </div>
         <Form 
            submite={submite}
            type={"number"}
            placeholder={"Phone number"}
            name="phone"
            styles={"inputOrder"}
            regexp={/[0-9]{10}/}
            stylesBtn={"orderBtn"} 
            title={"Order"}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPages;