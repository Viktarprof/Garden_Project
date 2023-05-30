const defaultState = {};

const LOAD_CATEGORIES_PRODUCTS = "LOAD_CATEGORIES_PRODUCTS";
const LOAD_CATEGORY_INFO_PRODUCTS = "LOAD_CATEGORY_INFO_PRODUCTS";
const GET_CATEGORY_PRODUCTS = "GET_CATEGORY_PRODUCTS";
const SORT_CATEGORY_PRODUCTS_BY_DEFAULT = "SORT_CATEGORY_PRODUCTS_BY_DEFAULT";
const SORT_CATEGORY_PRODUCTS_BY_PRICE_DESC = "SORT_CATEGORY_PRODUCTS_BY_PRICE_DESC";
const SORT_CATEGORY_PRODUCTS_BY_PRICE_ASC = "SORT_CATEGORY_PRODUCTS_BY_PRICE_ASC";
const SORT_CATEGORY_PRODUCTS_BY_NAME_DESC = "SORT_CATEGORY_PRODUCTS_BY_NAME_DESC";
const SORT_CATEGORY_PRODUCTS_BY_NAME_ASC = "SORT_CATEGORY_PRODUCTS_BY_NAME_ASC";
const SORT_CATEGORY_PRODUCTS_BY_RANGE = "SORT_CATEGORY_PRODUCTS_BY_RANGE";
const FILTER_CATEGORY_PRODUCTS_PRODUCTS_BY_SALE = "FILTER_CATEGORY_PRODUCTS_PRODUCTS_BY_SALE";

export const categoryProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_PRODUCTS:
      console.log(action.payload);
      return { ...action.payload, rangeVisible: true, showProductsSale : true };

      case LOAD_CATEGORY_INFO_PRODUCTS:
        return [...action.payload];
  
      case SORT_CATEGORY_PRODUCTS_BY_DEFAULT:
        const copyState = [...state];
        return copyState.sort((a, b) => a.id - b.id);
  
      case SORT_CATEGORY_PRODUCTS_BY_PRICE_DESC:
        const priceDescState = [...state];
        return priceDescState.sort((a, b) => a.price - b.price);
  
      case SORT_CATEGORY_PRODUCTS_BY_PRICE_ASC:
        const priceAscState = [...state];
        return priceAscState.sort((a, b) => b.price - a.price);
  
      case SORT_CATEGORY_PRODUCTS_BY_NAME_DESC:
        const nameDescState = [...state];
        return nameDescState.sort((a, b) => a.title.localeCompare(b.title));
  
      case SORT_CATEGORY_PRODUCTS_BY_NAME_ASC:
        const nameAscState = [...state];
        return nameAscState.sort((a, b) => b.title.localeCompare(a.title));
  
      case SORT_CATEGORY_PRODUCTS_BY_RANGE:
        console.log(action.payload);
        const { from, to } = action.payload;
        return state.map((product) => ({
          ...product,
          rangeVisible: product.price >= from && product.price <= to,
        }));
  
        case FILTER_CATEGORY_PRODUCTS_PRODUCTS_BY_SALE:
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
  
  

  export const loadCategoryInfoActions = (payload) => ({type: LOAD_CATEGORY_INFO_PRODUCTS, payload });
  export const getCategoryProductsActions = (payload) => ({ type: GET_CATEGORY_PRODUCTS, payload });
  export const sortCategoryByDefaultAction = () => ({ type: SORT_CATEGORY_PRODUCTS_BY_DEFAULT });
  export const sortCategoryByPriceDesctAction = () => ({ type: SORT_CATEGORY_PRODUCTS_BY_PRICE_DESC });
  export const sortCategoryByPriceAsctAction = () => ({ type: SORT_CATEGORY_PRODUCTS_BY_PRICE_ASC });
  export const sortCategoryByNameDesctAction = () => ({ type: SORT_CATEGORY_PRODUCTS_BY_NAME_DESC });
  export const sortCategoryByNameAsctAction = () => ({ type: SORT_CATEGORY_PRODUCTS_BY_NAME_ASC });
  export const sortByRangeAction = (payload) => ({ type: SORT_CATEGORY_PRODUCTS_BY_RANGE, payload});
  export const filterProductsBySaleAction = (payload) => ({ type: FILTER_CATEGORY_PRODUCTS_PRODUCTS_BY_SALE, payload });
  export const loadCategoriesProductsAction = (payload) => ({ type: LOAD_CATEGORIES_PRODUCTS, payload });
