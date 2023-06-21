const defaultState =  JSON.parse(localStorage.getItem('allProducts')) ??  [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const LOAD_INFO_PRODUCTS = "LOAD_INFO_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";
const SORT_BY_DEFAULT = "SORT_BY_DEFAULT";
const SORT_BY_PRICE_DESC = "SORT_BY_PRICE_DESC";
const SORT_BY_PRICE_ASC = "SORT_BY_PRICE_ASC";
const SORT_BY_NAME_DESC = "SORT_BY_NAME_DESC";
const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
const SORT_BY_RANGE = "SORT_BY_RANGE";
const FILTER_PRODUCTS_BY_SALE = "FILTER_PRODUCTS_BY_SALE";

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload ? [...action.payload.map((product) => ({
        ...product,
        rangeVisible: true,
        showProductsSale: true // обратить внимание. задаем свойсво. без его не отображался список продуктов во время
      }))] : state;

    case LOAD_INFO_PRODUCTS:
      return Array.isArray(action.payload) ? [...action.payload] : state;
  
    case SORT_BY_DEFAULT:
      const copyState = [...state];
      return copyState.sort((a, b) => a.id - b.id);

    case SORT_BY_PRICE_DESC:
      const priceDescState = [...state];
      return priceDescState.sort((a, b) => a.price - b.price);

    case SORT_BY_PRICE_ASC:
      const priceAscState = [...state];
      return priceAscState.sort((a, b) => b.price - a.price);

    case SORT_BY_NAME_DESC:
      const nameDescState = [...state];
      return nameDescState.sort((a, b) => a.title.localeCompare(b.title));

    case SORT_BY_NAME_ASC:
      const nameAscState = [...state];
      return nameAscState.sort((a, b) => b.title.localeCompare(a.title));

    case SORT_BY_RANGE:
      console.log(action.payload);
      const { from, to } = action.payload;
      return state.map((product) => ({
        ...product,
        rangeVisible: product.price >= from && product.price <= to,
      }));

    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload){
          return state.map(elem => {
              if(elem.discont_price === null){
                  elem.showProductsSale = false
              }
              return elem
          })
      } else {
          return state.map(elem => ({...elem, showProductsSale: true}))
      };
        

    default:
      return state;
  }
};


export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });
export const loadInfoProductsAction = (payload) => ({type: LOAD_INFO_PRODUCTS, payload });
export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload });
export const sortByDefaultAction = () => ({ type: SORT_BY_DEFAULT });
export const sortByPriceDesctAction = () => ({ type: SORT_BY_PRICE_DESC });
export const sortByPriceAsctAction = () => ({ type: SORT_BY_PRICE_ASC });
export const sortByNameDesctAction = () => ({ type: SORT_BY_NAME_DESC });
export const sortByNameAsctAction = () => ({ type: SORT_BY_NAME_ASC });
export const sortByRangeAction = (payload) => ({ type: SORT_BY_RANGE, payload});
export const filterProductsBySaleAction = (payload) => ({ type: FILTER_PRODUCTS_BY_SALE, payload });
