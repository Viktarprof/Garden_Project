const defaultState = { };
const LOAD_CATEGORIES_PRODUCTS = "LOAD_CATEGORIES_PRODUCTS";

export const categoryProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_PRODUCTS:
      // console.log(action.payload);
      return { ...action.payload };

    default:
      return state;
  }
};
export const loadCategoriesProductsAction = (payload) => ({ type: LOAD_CATEGORIES_PRODUCTS, payload });
