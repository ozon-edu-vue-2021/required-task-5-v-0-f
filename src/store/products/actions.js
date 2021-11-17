import { SET_PRODUCTS } from "./mutation-types";
import { getProducts } from "@/api";

export async function fetchProducts({ commit }) {
  const products = await getProducts();
  commit(SET_PRODUCTS, products);
}
