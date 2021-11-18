const API_URL = "https://random-data-api.com/api/food/random_food?size=30";
const IMG_COUNT = 12;
const MAX_PRICE = 100;

const randomPrice = () => Math.ceil(Math.random() * MAX_PRICE);
const randomImage = () => `${Math.ceil(Math.random() * IMG_COUNT)}.webp`;

export async function getProducts() {
  const rawProducts = await fetch(API_URL);
  const products = await rawProducts.json();
  return Object.fromEntries(
    products.map((product) => [
      product.uid,
      {
        ...product,
        price: randomPrice(),
        image: randomImage(),
        name: product.dish,
        description: product.description.slice(0, 100),
      },
    ])
  );
}
