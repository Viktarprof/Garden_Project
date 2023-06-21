const defaultState = [];

const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export const loadCategories = (payload) => ({ type: LOAD_CATEGORIES, payload });

export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return Array.isArray(action.payload) ? [...action.payload] : state;

    default:
      return state;
  }
};