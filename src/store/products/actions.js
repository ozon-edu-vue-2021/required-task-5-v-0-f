import {
  SET_PRODUCTS,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "./mutation-types";
import { getProducts } from "@/api";

export async function fetchProducts({ commit }) {
  const products = await getProducts();
  commit(SET_PRODUCTS, products);
}

export function toggleFavourite({ state, commit }, productUid) {
  const { isFavourite } = state.products[productUid];
  if (isFavourite) commit(REMOVE_FROM_FAVOURITES, productUid);
  else commit(ADD_TO_FAVOURITES, productUid);
}
