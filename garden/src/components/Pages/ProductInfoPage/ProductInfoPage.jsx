import React, { useEffect } from "react";
import s from "./ProductInfoPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoProducts } from "../../../asyncActions/categories";
import Product from "../../Product/Product";

function ProductInfoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const category_products = useSelector((store) => store.allProducts);
  // console.log(category_products);

  useEffect(() => dispatch(GetInfoProducts(id)), []);

  return (  
    <div>
        {category_products.map((el) => 
            <Product 
                key={el.id} 
                product={el}/>)}
    </div>
  )
}

export default ProductInfoPage;
