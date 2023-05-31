import React from 'react'
import s from './AllProducts.module.css'
import ProductsList from '../../ProductsList/ProductsList'


function AllProducts() {
  return (
    <div>
        <ProductsList 
          title={'All products'}
          styles={'productsListContainer'}
          showCheckbox={true}
          location = 'all_products'
        />
    </div>
  )
}

export default AllProducts