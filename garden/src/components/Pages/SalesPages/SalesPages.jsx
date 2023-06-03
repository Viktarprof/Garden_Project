import React from 'react'
import s from './SalesPages.module.css'
import ProductsList from '../../ProductsList/ProductsList'

function SalesPages() {
  return (
    <div>
      <ProductsList
        title={'Products with sale'}
        styles={"productsListContainer"}
        showSale={true} // показываем продукты со скидкой
        showCheckbox={false}
        showPagination={true}
      />
    </div>
  )
}

export default SalesPages