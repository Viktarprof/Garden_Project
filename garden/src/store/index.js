import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer } from './categoryReducer';
import { productsReducer } from './productsReducer';
import { categoryProductsReducer } from './categoryIDReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allProducts: productsReducer,
  categoryProducts: categoryProductsReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))