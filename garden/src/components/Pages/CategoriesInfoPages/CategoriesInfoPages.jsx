
import React, { useEffect } from 'react';
import s from './CategoriesInfoPages.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoryProducts } from '../../../asyncActions/categories';
import CategoryProductsList from '../../CategoryProductsList/CategoryProductsList';


function CategoriesInfoPages() {
 
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const category_products = useSelector((store) => store.categoryProducts)
  console.log(category_products);

  useEffect(() => dispatch(GetCategoryProducts(id)), [])

  const products = category_products.data ? category_products.data : [];
  const title = category_products.category ? category_products.category.title : ''


  return (
    <>
      <CategoryProductsList products={products} title={title}/>
    </>
  );
}

export default CategoriesInfoPages;

