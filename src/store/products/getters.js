export function products(state, getters, rootState) {
  const cartProducts = rootState.cart.products;
  return Object.entries(state.products).map(([productUid, product]) => ({
    ...product,
    quantity: cartProducts[productUid] ?? 0,
  }));
}

export function favouriteProducts(state, getters) {
  const products = getters.products;
  return products.filter((product) => product.isFavourite);
}
