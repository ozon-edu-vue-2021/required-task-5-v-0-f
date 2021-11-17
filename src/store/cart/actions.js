import { SET_PRODUCTS, REMOVE_PRODUCT, ADD_PRODUCT } from "./mutation-types";

export function removeAll({ commit }) {
  commit(SET_PRODUCTS, []);
}

export function removeProduct({ commit }, id) {
  commit(REMOVE_PRODUCT, id);
}

export function addProduct({ commit }, id) {
  commit(ADD_PRODUCT, id);
}