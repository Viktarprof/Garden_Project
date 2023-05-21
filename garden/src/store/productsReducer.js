const defaultState = [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];

    default:
      return state;
  }
};