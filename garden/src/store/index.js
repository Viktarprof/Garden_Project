import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer } from './categoryReducer';
import { productsReducer } from './productsReducer';
import { categoryProductsReducer } from './categoryIDReducer';

const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allProducts: productsReducer,
  categoryProducts: categoryProductsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))