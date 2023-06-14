import React from 'react'
import s from './NotFoundPage.module.css'
import notFound from './media/notFound.png'
import flower from './media/flower.png'

function NotFoundPage() {
  return (
    <div className={s.notFoundContainer}>
        <img width={1350} src={notFound} alt="notFoundPage" />
        <img width={60} src={flower} alt="flower" className={s.flower}/>
    </div>
  )
}

export default NotFoundPage