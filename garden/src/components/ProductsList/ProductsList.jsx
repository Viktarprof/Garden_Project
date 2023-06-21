import React, { useEffect, useState } from "react";
import s from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load_products } from "../../asyncActions/requests_products";
import ProductItem from "../ProductItem/ProductItem";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";

function ProductsList({
  location,
  title,
  styles,
  showItems,
  showSale,
  showCheckbox,
  onChange,
  showPagination,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(load_products);
  }, []);

  useEffect(() => {
    document.title = 'Garden: ' + title;
  }, [title]);

  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.allProducts).filter(
    (el) => el.showProductsSale && el.rangeVisible
  );

  const [currentPage, setCurrentPage] = useState(1); // отслеживаю текующую страницу
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let showSaleProducts = allProducts;
  if (showSale) {
    showSaleProducts = allProducts
      .filter((el) => el.discont_price)
      .slice(0, showItems);
  }
  const currentProducts = showSaleProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`${s[styles]}`}>
      <h2>{title}</h2>
      <Filters
        showCheckbox={showCheckbox}
        onChange={onChange}
        location={location}
      />
      {allProducts.length === 0 ? (
        <p className="productsResult">
          TRY AGAIN! <span>No results matching your search filters criteria.</span> 
        </p>
      ) : (
        <div className={s.productsList}>
          {currentProducts.map((el) => (
            <ProductItem key={el.id} {...el} product={el} />
          ))}
        </div>
      )}
      {showPagination ? (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(showSaleProducts.length / productsPerPage)}
          paginate={paginate}
        />
      ) : null}
    </div>
  );
}

export default ProductsList;
