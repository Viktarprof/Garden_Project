import React, { memo, useState } from 'react'
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


    const [active, setActive] = useState(false);

    const activeBurger = () => {
      setActive(!active);

    };
    const closeNavMenu = () => {
        setActive(false);
      };
  return (
    <>
        <div onClick={activeBurger} className={`${s.btn_burger} ${active ? '': s.active }`}>
            <span className={`${s.line} ${active ? s.active : '' }`}></span>
            <span className={`${s.line1} ${active ? s.active : '' }`}></span>
            <span className={`${s.line2} ${active ? s.active : '' }`}></span>
       </div>

    <div className={`${s.navMenuContainer} ${active ? s.active : ""}`}>
         <div className={s.logo_Btn} >
            <NavLink to="/" onClick={closeNavMenu}>
                <img width={72} src={logo} alt="logo" />
            </NavLink>
            <NavLink to="categories/all" onClick={closeNavMenu}>
                <Button title={'Catalog'} styles={'btnCatalog'}/>
            </NavLink>
        </div>

        <div className={s.navLinks}>
            <div className={s.links}>
                <NavLink to="/" onClick={closeNavMenu}>
                    Main Page
                </NavLink>
                <NavLink to="/allProducts" onClick={closeNavMenu}>
                    All products
                </NavLink>
                <NavLink to="/allSales" onClick={closeNavMenu}>
                    All sales
                </NavLink>
            </div>
            <div>
                <NavLink to="/cart" onClick={closeNavMenu}>
                    <HiOutlineShoppingBag className={s.cartBtn} />
                        {cartItemCount > 0 && <span className={s.cartItemCount}>{cartItemCount}</span>}
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}
)
