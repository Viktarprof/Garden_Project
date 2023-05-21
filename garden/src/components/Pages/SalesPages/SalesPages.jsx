import React from 'react'
import s from './SalesPages.module.css'
import ProductsList from '../../ProductsList/ProductsList'

function SalesPages() {
  return (
    <div>
        <ProductsList 
          title={'Products with sale'} 
          styles={"productsListContainer"} 
          showSale={true}/>
    </div>
  )
}

export default SalesPages