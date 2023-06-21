import React, { useEffect } from "react";
import s from "./ProductInfoPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoProducts } from "../../../asyncActions/requests_products";
import Product from "../../Product/Product";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function ProductInfoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const category_products = useSelector((store) => store.allProducts);
  // console.log(category_products);

  useEffect(() => dispatch(GetInfoProducts(id)), []);
  
  const product = category_products.find((el) => el.id !== id);
  if(!product){
    return <NotFoundPage/>
  }

  return (  
    <>
      {
      category_products.map((el) => 
            <Product 
                key={el.id} 
                product={el}/>)}
      
    </>
  )
}

export default ProductInfoPage;
