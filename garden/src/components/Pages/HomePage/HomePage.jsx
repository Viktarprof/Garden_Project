import React, { useEffect } from "react";
import { Link } from "react-scroll";
import s from "./HomePage.module.css";
import Button from "../../UI/Button/Button";
import gardenImage from "./media/gardenImage.png";
import Offer from "../../Offer/Offer";
import CategoriesList from "../../CategoriesList/CategoriesList";
import ProductsList from "../../ProductsList/ProductsList";

function HomePage() {
  useEffect(() => {
    document.title = 'Garden: Main';
  }, ['Garden: Main']);

  return (
    <>
      <div className={s.titleContainer}>
        <div className={s.head}>
          <div className={s.titleButton}>
            <h1>Sale</h1>
            <h3>New season</h3>
              <Link to="productsList" smooth={true} duration={1500}>
                <Button title={"Sale"} styles={"btnSale"} />
              </Link>
          </div>
          <div>
            <img width={900} src={gardenImage} alt="gardenImage" />
          </div>
        </div>
      </div>
     
      <CategoriesList
        title={"Catalog"}
        showItems={4}
        styles={"categoryListContainer"}
        showBtn={true}
      />

      <Offer />
      <div id="productsList">
        <ProductsList
          title={"Sale"}
          styles={"offerSale"}
          showItems={3} // показываем только три продукта
          showSale={true} // показываем продукты со скидкой 
        />
      </div>
    </>
  );
}

export default HomePage;
