import React, { memo } from 'react'
import s from './NavMenu.module.css'
import { NavLink } from "react-router-dom";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import logo from '../NavMenu/media/mainLogo.png'
import Button from '../UI/Button/Button';
import { useSelector } from 'react-redux';



export default memo(
function NavMenu() {
    const cart = useSelector(state => state.cart);
    const cartItemCount = cart.reduce((count, item) => count + item.count, 0);

  return (
    <div className={s.navMenuContainer}>
         <div className={s.logo_Btn}>
            <NavLink to="/" >
                <img width={72} src={logo} alt="logo" />
            </NavLink>
            <NavLink to="categories/all">
                <Button title={'Catalog'} styles={'btnCatalog'}/>
            </NavLink>
        </div>

        <div className={s.navLinks}>
            <div className={s.links}>
                <NavLink to="/" >
                    Main Page
                </NavLink>
                <NavLink to="/allProducts">
                    All products
                </NavLink>
                <NavLink to="/allSales">
                    All sales
                </NavLink>
            </div>
            <div>
                <NavLink to="/cart" >
                    <HiOutlineShoppingBag className={s.cartBtn} />
                        {cartItemCount > 0 && <span className={s.cartItemCount}>{cartItemCount}</span>}
                </NavLink>
            </div>
        </div>
    </div>
  )
}
)
