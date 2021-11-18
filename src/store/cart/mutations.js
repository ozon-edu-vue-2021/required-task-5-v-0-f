import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCT_QUANTITY,
} from "./mutation-types";

export default {
  [ADD_PRODUCT](state, productUid) {
    state.products = { ...state.products, [productUid]: 1 };
  },
  [SET_PRODUCT_QUANTITY](state, { productUid, quantity }) {
    state.products = { ...state.products, [productUid]: quantity };
  },
  [REMOVE_PRODUCT](state, productUid) {
    delete state.products[productUid];
    state.products = { ...state.products }; // for reactivity
  },
};
