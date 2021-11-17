import { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from "./mutation-types";

export default {
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },
  [ADD_PRODUCT](state, product) {
    state.products = [ ...state.products, product];
  },
  [REMOVE_PRODUCT](state, id) {
    state.products = state.products.filter((product) => product.uid !== id);
  },
};
