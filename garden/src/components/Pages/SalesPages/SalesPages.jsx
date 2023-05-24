import React from 'react'
import s from './SalesPages.module.css'
import ProductsList from '../../ProductsList/ProductsList'

function SalesPages() {
  return (
    <div>
      <ProductsList
        showFilter={true}
        title={'Products with sale'}
        styles={"productsListContainer"}
        showSale={true}
        showCheckbox={false}
      />
    </div>
  )
}

export default SalesPages