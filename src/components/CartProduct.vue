<template>
  <div class="product">
    <div class="product-info">
      <img :src="`/images/${product.image}`" />
      <div class="product-info-details">
        <span class="product-name">{{ product.name }}</span>
        <span class="product-price">{{ product.price }} ₽</span>
      </div>
    </div>
    <div class="buttons">
      <div class="remove">Удалить</div>
      <div class="favourites-button" v-if="product.inFavourites">❤️</div>
      <div class="favourites-button" v-else>♡</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
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
  width: 100px;
}
.product-price {
  padding-top: 10px;
  font-weight: bold;
}
.product-name {
  padding: 10px 0 0 10px;
}
.buttons {
  display: flex;
  /*justify-content: space-between;*/
  padding-top: 10px;
  align-items: center;
}
.remove {
  color: deepskyblue;
  margin-right: 10px;
  cursor: pointer;
}
.favourites-button {
  cursor: pointer;
  font-size: 25px;
  padding-top: 5px;
}
.product-info {
  display: flex;
}
.product-info-details {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
</style>
