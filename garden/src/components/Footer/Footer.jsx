import React from 'react'
import s from './Footer.module.css'
import Contacts from '../Contacts/Contacts'
import MapWindow from '../MapWindow/MapWindow'

function Footer() {
  return (
    <div className={s.footerContainer}>
        <Contacts/>
        <MapWindow/>
    </div>
  )
}

export default Footer