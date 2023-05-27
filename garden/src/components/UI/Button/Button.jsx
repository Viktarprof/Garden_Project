import React from 'react'
import s from './Button.module.css'

function Button( {title, styles, stylesBtn, onClick } ) {


  return (
    <button onClick={onClick} className={`${s[styles]} ${s[stylesBtn]}`}>
        {title}
    </button>
  )
}

export default Button