const defaultState = [];

const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export const loadCategories = (payload) => ({ type: LOAD_CATEGORIES, payload });

export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};