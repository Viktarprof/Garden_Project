import React, { useEffect } from 'react';
import s from './CategoriesInfoPages.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoryProducts } from '../../../asyncActions/requests_products';
import CategoryProductsList from '../../CategoryProductsList/CategoryProductsList';

function CategoriesInfoPages() {
 
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const category_products = useSelector((store) => store.categoryProducts);

  useEffect(() => dispatch(GetCategoryProducts(id)), {})
 
  const products = category_products.data ? category_products.data : [];
  const title = category_products.category ? category_products.category.title : '';
  console.log(products);

  return (
    <>
      <CategoryProductsList 
        products={products} 
        title={title}
        location = 'category_products'
        />
    </>
  );
}

export default CategoriesInfoPages;

