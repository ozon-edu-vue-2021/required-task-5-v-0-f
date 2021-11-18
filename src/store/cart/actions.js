import {
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  SET_PRODUCT_QUANTITY,
} from "./mutation-types";

export function removeProduct({ commit }, productUid) {
  commit(REMOVE_PRODUCT, productUid);
}

export function addProduct({ state, commit }, productUid) {
  const quantity = state.products[productUid];
  if (quantity) {
    commit(SET_PRODUCT_QUANTITY, { productUid, quantity: quantity + 1 });
  } else commit(ADD_PRODUCT, productUid);
}

export function setQuantity({ commit }, { productUid, quantity }) {
  commit(SET_PRODUCT_QUANTITY, { productUid, quantity });
}
