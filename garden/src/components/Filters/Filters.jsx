import React, { useState } from "react";
import s from "./Filters.module.css";
import Input from "../UI/Input/Input";
import { useDispatch } from "react-redux";
import {
  filterProductsBySaleAction,
  sortByDefaultAction,
  sortByNameAsctAction,
  sortByNameDesctAction,
  sortByPriceAsctAction,
  sortByPriceDesctAction,
  sortByRangeAction,
} from "../../store/productsReducer";
import { 
  filterCategoryProductsBySaleAction, 
  sortCategoryByDefaultAction, 
  sortCategoryByNameAsctAction, 
  sortCategoryByNameDesctAction, 
  sortCategoryByPriceAsctAction, 
  sortCategoryByPriceDesctAction, 
  sortCategoryProductsByRangeAction 
} from "../../store/categoryIDReducer";

function Filters({ showCheckbox, location }) {
  const [{ from = "", to = "" }, setRange] = useState({});
  const dispatch = useDispatch();

  const handleSortOption = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      // console.log(e.tagret.value);
      case "default":
        if (location === "category_products"){
          dispatch(sortCategoryByDefaultAction())
        } else {
          dispatch(sortByDefaultAction())
        }
        break;
      case "priceDesc":
        if (location === "category_products"){
          dispatch(sortCategoryByPriceDesctAction())
        } else {
          dispatch(sortByPriceDesctAction());
        }
        break;
      case "priceAsc":
        if (location === "category_products"){
          dispatch(sortCategoryByPriceAsctAction())
        } else {
          dispatch(sortByPriceAsctAction());
        }
        break;
      case "nameDesc":
          dispatch(location === "category_products" ? sortCategoryByNameDesctAction() : sortByNameDesctAction());
        
        break;
      case "nameAsc":
          dispatch(location === "category_products" ? sortCategoryByNameAsctAction() : sortByNameAsctAction());
      
        break;
      default:
        break;
    }
  };

  const handleRange = (e) => {
    const targetInput = e.target.name;
    const newValue = e.target.value.replace(",", ".");
    // console.log(newValue);
    if (!isNaN(newValue)) {
      setRange((prevRange) => ({
        ...prevRange,
        [targetInput]: newValue,
      }));

      const range = {
        from: targetInput === "from" ? +newValue : from || -Infinity,
        to: targetInput === "to" ? +newValue : to || Infinity,
      };
        dispatch(location === "category_products" ? sortCategoryProductsByRangeAction(range) : sortByRangeAction(range));
    }
  };

  const check_box_handler = (e) => {
    // console.log(e.target.checked);
    dispatch(location === "category_products" ? filterCategoryProductsBySaleAction(e.target.checked) : filterProductsBySaleAction(e.target.checked));
  };

  return (
    <div className={s.filterContainer}>
      <div className={s.price}>
        <p>Price</p>
        <Input
          type="text"
          value={from || ""}
          placeholder="from"
          name="from"
          onChange={handleRange}
          targetInput={location}
        />
        <Input 
          type="text" 
          value={to || ""}
          placeholder="to" 
          name="to" 
          onChange={handleRange} />
      </div>


      {showCheckbox && (
        <div className={s.discounted}>
          <p>Discounted items</p>
          <Input
            styles={"checkbox"}
            type="checkbox"
            onClick={check_box_handler}
          />
        </div>
      )}

      <div className={s.sorted}>
        <label>Sorted</label>
        <select onInput={handleSortOption} className="custom-select">
          <option value="default">default</option>
          <option value="priceDesc">Lowest Price</option>
          <option value="priceAsc">Highest Price</option>
          <option value="nameDesc">Name (A - Z)</option>
          <option value="nameAsc">Name (Z - A)</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
