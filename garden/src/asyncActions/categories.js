import { loadCategories } from "../store/categoryReducer";
import { loadProducts } from "../store/productsReducer";

const baseUrl = 'http://localhost:3333/';
const categoriesAll = 'categories/all';
const productsAll = 'products/all';

const categoriesUrl = baseUrl + categoriesAll;
const productsUrl = baseUrl + productsAll

export const load_categories = (dispatch) => {
  fetch(categoriesUrl)
    .then((res) => res.json())
    .then((data) => dispatch(loadCategories(data)));
};

export const load_products = (dispatch) => {
  fetch(productsUrl)
    .then((res) => res.json())
    .then((data) => dispatch(loadProducts(data)));
};