<template>
  <div class="product">
    <img :src="`/images/${product.image}`" />
    <span class="product-price">{{ product.price }} ₽</span>
    <span class="product-name">{{ product.name }}</span>
    <div class="buttons">
      <div class="cart-button" @click="addProduct(product.uid)">В корзину</div>
      <select v-model.number="productQuantity" v-show="productQuantity > 0">
        <option v-for="quantity of quantityOptions" :key="quantity">
          {{ quantity }}
        </option>
      </select>
      <div class="favourites-button" @click="toggleFavourite(product.uid)">
        <span v-if="product.isFavourite">❤️</span>
        <span v-else>♡</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Product",
  props: ["product"],
  methods: {
    ...mapActions("cart", ["addProduct", "setQuantity"]),
    ...mapActions("products", ["toggleFavourite"]),
  },
  computed: {
    quantityOptions() {
      return Array(20)
        .fill(0)
        .map((value, index) => index + 1);
    },
    productQuantity: {
      set: function (newQuantity) {
        this.setQuantity({
          productUid: this.product.uid,
          quantity: newQuantity,
        });
      },
      get: function () {
        return this.product.quantity;
      },
    },
  },
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
.cart-button {
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
select {
  height: 30px;
  outline: none;
  border: 1px solid #ccc;
  background: none;
  padding: 3px;
  border-radius: 3px;
}
</style>
