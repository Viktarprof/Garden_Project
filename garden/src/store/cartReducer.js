const defaultState = [];

const ADD_TO_CART = "ADD_TO_CART";
const INCR_COUNT_PRODUCT = "INCR_COUNT_PRODUCT";
const DECR_COUNT_PRODUCT = "DECR_COUNT_PRODUCT";
const DELL_PRODUCT = 'DELL_PRODUCT';
const CLEAR_CART = 'CLEAR_CART';

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(action.payload);
      const findElem = state.findIndex((el) => el.id === action.payload.id); //index
      if (findElem !== -1) {
        const newState = [...state];
        newState[findElem].count = newState[findElem].count++;
        return newState;
      } else {
        return [...state, { ...action.payload, count: 0 }];
      }

    case INCR_COUNT_PRODUCT:
      const incrTargetProduct = state.find((el) => el.id === action.payload);
      const newCount = incrTargetProduct.count < 25 ? incrTargetProduct.count + 1 : 25;
      if (newCount === 25) {
        alert("Превышено максимальное значение, 25.");
      }
      return state.map((el) =>
        el.id === action.payload ? { ...el, count: newCount } : el
      );

    case DECR_COUNT_PRODUCT:
      const decrTargetProduct = state.find((el) => el.id === action.payload);
      decrTargetProduct.count = decrTargetProduct.count - 1;

      return state.filter((el) => el.count !== 0);

    case DELL_PRODUCT:
      return state.filter((el) => el.id !== action.payload);
    
    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const incrCountAction = (payload) => ({type: INCR_COUNT_PRODUCT,
payload,
});
export const decrCountAction = (payload) => ({type: DECR_COUNT_PRODUCT, payload});
export const dellProductAction = (payload) => ({type:DELL_PRODUCT, payload});
export const clearCartAction = () => ({type: CLEAR_CART});