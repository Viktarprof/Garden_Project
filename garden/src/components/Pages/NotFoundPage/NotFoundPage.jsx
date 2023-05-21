import React from 'react'
import s from './NotFoundPage.module.css'
import notFound from './media/notFound.png'

function NotFoundPage() {
  return (
    <div className={s.notFoundContainer}>
        <img width={1350} src={notFound} alt="notFoundPage" />
    </div>
  )
}

export default NotFoundPage