import {
  SET_PRODUCTS,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "./mutation-types";

export default {
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },
  [ADD_TO_FAVOURITES](state, productUid) {
    state.products = {
      ...state.products,
      [productUid]: { ...state.products[productUid], isFavourite: true },
    };
  },
  [REMOVE_FROM_FAVOURITES](state, productUid) {
    state.products = {
      ...state.products,
      [productUid]: { ...state.products[productUid], isFavourite: false },
    };
  },
};
