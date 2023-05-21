import React, { memo } from 'react'
import s from './NavMenu.module.css'
import { NavLink } from "react-router-dom";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import logo from '../NavMenu/media/mainLogo.png'
import Button from '../UI/Button/Button';
import { Link } from "react-scroll";


export default memo(
function NavMenu() {
    console.log('NavMenu');
  return (
    <div className={s.navMenuContainer}>
         <div className={s.logo_Btn}>
            <NavLink to="/" >
                <img width={72} src={logo} alt="logo" />
            </NavLink>
            <Link to="categoryList" smooth={true} duration={1500}>
                <Button title={'Catalog'} styles={'btnCatalog'}/>
            </Link>
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
                <NavLink to={"/cart"} >
                    <HiOutlineShoppingBag className={s.cartBtn}/>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
)
