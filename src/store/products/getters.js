export function favourites(state) {
  return state.products.filter((product) => product.inFavourites);
}
