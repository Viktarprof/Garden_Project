const defaultState = [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const LOAD_INFO_PRODUCTS = "LOAD_INFO_PRODUCTS";

export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });
export const loadInfoProductsAction = (payload) => ({ type: LOAD_INFO_PRODUCTS, payload });


export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    case LOAD_INFO_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};