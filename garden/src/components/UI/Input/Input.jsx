import React from 'react'
import s from './Input.module.css'

function Input( {type, styles, placeholder, name, pattern} ) {
  return (
    <input 
      pattern={pattern} 
      type={type} 
      name={name}
      placeholder={placeholder}
      className={`${s[styles]}`}
    />
  )
}

export default Input