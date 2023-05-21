import React from 'react'
import s from './Button.module.css'

function Button( {title, styles } ) {


  return (
    <button className={`${s[styles]}`}>
        {title}
    </button>
  )
}

export default Button