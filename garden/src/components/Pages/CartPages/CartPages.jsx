import React from "react";
import s from "./CartPages.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import arrowRigth from "./media/arrowRigth.png";
import Form from "../../Form/Form";

function CartPages() {

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


  return (
    <div className={s.cartContainer}>
      <h2>Shopping cart</h2>
      <div className={s.toBackStore}>
        <Button styles="toBackStore" title={"Back to the store "} />
        <img width={7} height={13} src={arrowRigth} alt="arrowRigth" />
      </div>

      <div className={s.orderContainer}>
        <div className={s.testCONTAINER}>
          <p>новый компопнент с продуктами </p>
        </div>

        <div className={s.orderDetail}>
          <p>Order details</p>
          <div className={s.total}>
            <p>Total</p>
            <p>000000</p>
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