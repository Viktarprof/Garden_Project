import React from 'react';
import s from './Filters.module.css'
import Input from '../UI/Input/Input';

function Filters({ showCheckbox }) {
 
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
          <Input type="checkbox" />
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