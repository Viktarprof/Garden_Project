import React from 'react'
import s from './CartList.module.css'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'

function CartList() {

    const cart = useSelector(store => store.cart)

  return (
    <div className={s.line}>
        {cart.map((el, index) => 
          <CartItem 
            key={index} 
            product={el}/>)}
    </div>
  )
}

export default CartList