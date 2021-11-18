export function products(state, getters, rootState) {
  const products = rootState.products.products;
  return Object.entries(state.products).map(([productUid, quantity]) => ({
    ...products[productUid],
    quantity,
  }));
}

export function totalPrice(state, getters) {
  const products = getters.products;
  return products.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    0
  );
}
