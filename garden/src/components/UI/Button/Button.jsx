import React from 'react'
import s from './Button.module.css'

function Button( {title, styles, stylesBtn } ) {


  return (
    <button className={`${s[styles]} ${s[stylesBtn]}`}>
        {title}
    </button>
  )
}

export default Button