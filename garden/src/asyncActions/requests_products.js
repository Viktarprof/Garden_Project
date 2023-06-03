import { loadCategories } from "../store/categoryReducer";
import { loadCategoriesProductsAction } from "../store/categoryIDReducer";
import { loadInfoProductsAction, loadProducts } from "../store/productsReducer";

const baseUrl = 'http://localhost:3333/';
const categoriesAll = 'categories/all';
const productsAll = 'products/all';
const category_products = 'categories/'
const products = 'products/'
const sale_send = 'sale/send'
const order_send = 'order/send'

const category_products_url = baseUrl + category_products;
const categoriesUrl = baseUrl + categoriesAll;
const productsUrl = baseUrl + productsAll;
const productsInfoUrl = baseUrl + products;

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

export const GetCategoryProducts = (id) => {
  return function(dispatch){
    // console.log(`${category_products_url}${id}`);
    fetch(`${category_products_url}${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(loadCategoriesProductsAction(data)));
  }
};

export const GetInfoProducts = (id) => {
  return function(dispatch){
    // console.log(`${category_products_url}${id}`);
    fetch(`${productsInfoUrl}${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(loadInfoProductsAction(data)));
  }
};


export const sale_req = (phone) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${sale_send}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(phone)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        resolve(json); // Возвращаем данные из сервера
      })
      .catch(error => {
        console.error(error);
        reject(error); // Отклоняем промис при возникновении ошибки
      });
  });
};



export const order_send_req = (phone) => {
  fetch(`${baseUrl}${order_send}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(json => console.log(json))
}
