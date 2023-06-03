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
const FILTER_CATEGORY_PRODUCTS_BY_SALE = "FILTER_CATEGORY_PRODUCTS_BY_SALE";

export const categoryProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_PRODUCTS:
      console.log(action.payload);
      action.payload.data = [...action.payload.data.map(el => ({...el, rangeVisible: true, showProductsSale : true } ))]
      return { ...action.payload };

      case LOAD_CATEGORY_INFO_PRODUCTS:
        return [...action.payload];
  
      case SORT_CATEGORY_PRODUCTS_BY_DEFAULT:
        return  {...state, data: state.data.sort((a, b) => a.id - b.id)};
  
      case SORT_CATEGORY_PRODUCTS_BY_PRICE_DESC:
        return { ...state, data: state.data.sort((a, b) => (a.price - b.price )) }
  
      case SORT_CATEGORY_PRODUCTS_BY_PRICE_ASC:
        return { ...state, data: state.data.sort((a, b) => (b.price - a.price )) }
  
      case SORT_CATEGORY_PRODUCTS_BY_NAME_DESC:
        return { ...state, data: state.data.sort((a, b) => a.title.localeCompare(b.title))};
  
      case SORT_CATEGORY_PRODUCTS_BY_NAME_ASC:
        return { ...state, data: state.data.sort((a, b) => b.title.localeCompare(a.title))};
  
      case SORT_CATEGORY_PRODUCTS_BY_RANGE:
        console.log(action.payload);
        const { from, to } = action.payload;
        return {
          ...state, data: state.data.map(elem => ({
            ...elem, rangeVisible:
              elem.price >= from && elem.price <= to
          })
          )
        }
        
        case FILTER_CATEGORY_PRODUCTS_BY_SALE:
          console.log(action.payload);
          return {...state, 
            data: state.data.filter(el => {
              if(el.discont_price === null){
                el.showProductsSale = !action.payload
              } 
              return el
            })  
          }
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
  export const sortCategoryProductsByRangeAction = (payload) => ({ type: SORT_CATEGORY_PRODUCTS_BY_RANGE, payload});
  export const filterCategoryProductsBySaleAction = (payload) => ({ type: FILTER_CATEGORY_PRODUCTS_BY_SALE, payload });
  export const loadCategoriesProductsAction = (payload) => ({ type: LOAD_CATEGORIES_PRODUCTS, payload });
