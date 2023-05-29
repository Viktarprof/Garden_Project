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

function Filters({ showCheckbox }) {
  const [{ from = "", to = "" }, setRange] = useState({});
  const dispatch = useDispatch();

  const handleSortOption = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      // console.log(e.tagret.value);
      case "default":
        dispatch(sortByDefaultAction());
        break;
      case "priceDesc":
        dispatch(sortByPriceDesctAction());
        break;
      case "priceAsc":
        dispatch(sortByPriceAsctAction());
        break;
      case "nameDesc":
        dispatch(sortByNameDesctAction());
        break;
      case "nameAsc":
        dispatch(sortByNameAsctAction());
        break;
      default:
        break;
    }
  };

  const handleRange = (e) => {
   
    const targetInput = e.target.name;
    const newValue = e.target.value.replace(",", ".");
    console.log(newValue);
    if (!isNaN(newValue)) {
      setRange((prevRange) => ({
        ...prevRange,
        [targetInput]: newValue,
      }));

      const range = {
        from: targetInput === "from" ? +newValue : from || -Infinity,
        to: targetInput === "to" ? +newValue : to || Infinity,
      };
      dispatch(sortByRangeAction(range));
    }
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
        />
        <Input
          type="text"
          placeholder="to"
          name="to"
          onChange={handleRange}
        />
      </div>

      {showCheckbox && (
        <div className={s.discounted}>
          <p> Discounted items </p>
          <Input
            styles={"checkbox"}
            type="checkbox"
            onClick={(e) => dispatch(filterProductsBySaleAction(e.target.checked))}
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