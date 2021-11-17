<template>
  <div class="product">
    <img :src="`/images/${product.image}`" />
    <span class="product-price">{{ product.price }} ₽</span>
    <span class="product-name">{{ product.name }}</span>
    <div class="buttons">
      <div class="trash-button">В корзину</div>
      <div class="favourites-button" v-if="product.inFavourites">❤️</div>
      <div class="favourites-button" v-else>♡</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.product img {
  width: 200px;
}
.product-price {
  padding-top: 10px;
  font-weight: bold;
}
.product-name {
  padding-top: 10px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  align-items: center;
}
.trash-button {
  background: cornflowerblue;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
}
.favourites-button {
  cursor: pointer;
  font-size: 25px;
  padding-top: 5px;
}
</style>
