import React from 'react';
import s from './Filters.module.css'
import Input from '../UI/Input/Input';
import { useDispatch } from 'react-redux';
import { filterProductsBySaleAction } from '../../store/productsReducer';

function Filters({ showCheckbox }) {
  // const dispatch = useDispatch()
  // const handleCheckboxChange = () => {
  //   dispatch(filterProductsBySaleAction(true));
  // };
 
  return (
    <div className={s.filterContainer}>
      <div className={s.price}>
      <p>Price</p>
      <Input 
        type="number" 
        name="number"  
        placeholder="from"/>
      <Input 
        type="number" 
        name="number"  
        placeholder="to"/>
      </div>

      {showCheckbox && (
        <div className={s.discounted}>
          <p> Discounted items </p>
          <Input 
            styles={'checkbox'}
            type="checkbox" 
            // onChange={handleCheckboxChange} 
            />
        </div>
      )}

      <div className={s.sorted}>
        <p>Sorted</p>
        <Input 
          type="number" 
          name="number"  
          placeholder="by default"/>
      </div>

    </div>
  )
}

export default Filters

