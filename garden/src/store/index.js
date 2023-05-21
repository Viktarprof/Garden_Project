import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer } from './categoryReducer';
import { productsReducer } from './productsReducer';

const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allProducts: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));