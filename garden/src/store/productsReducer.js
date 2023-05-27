const defaultState = [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const LOAD_INFO_PRODUCTS = "LOAD_INFO_PRODUCTS";
const FILTER_PRODUCTS_BY_SALE = "FILTER_PRODUCTS_BY_SALE";

export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });
export const loadInfoProductsAction = (payload) => ({type: LOAD_INFO_PRODUCTS, payload});
// export const filterProductsBySaleAction = (payload) => ({ type: FILTER_PRODUCTS_BY_SALE, payload })


export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    case LOAD_INFO_PRODUCTS:
      return [...action.payload];

      // case FILTER_PRODUCTS_BY_SALE:
      //   if (action.payload) {
      //     return state.map((elem) => {
      //       if (elem.discont_price !== null) {
      //         elem.showBySale = true; 
      //       }
      //       return elem;
      //     })
      //   } else {
      //     return state.map((elem) => ({...elem, showBySale: false}));
      //   }
    
      default:
        return state;
      }
    
};

// case FILTER_PRODUCTS_BY_SALE:
//   return state.map((elem) => {
//     if (elem.discont_price !== null) {
//       return { ...elem, showBySale: true };
//     } else {
//       return { ...elem, showBySale: false };
//     }
//   });