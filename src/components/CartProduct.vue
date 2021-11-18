<template>
  <div class="product">
    <div class="product-info">
      <img :src="`/images/${product.image}`" />
      <div class="product-info-details">
        <span class="product-name">{{ product.name }}</span>
        <span class="product-price">{{ product.price }} ₽</span>
        <select v-model.number="productQuantity">
          <option v-for="quantity of quantityOptions" :key="quantity">
            {{ quantity }}
          </option>
        </select>
      </div>
    </div>
    <div class="buttons">
      <div class="remove" @click="removeProduct(product.uid)">Удалить</div>
      <span class="separator">|</span>
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
  name: "CartProduct",
  props: ["product"],
  methods: {
    ...mapActions("cart", ["removeProduct", "setQuantity"]),
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
  width: 100px;
}
.product-price {
  flex-basis: 15%;
  font-weight: bold;
}
.product-name {
  padding-left: 10px;
  flex-grow: 1;
}
.buttons {
  display: flex;
  padding-top: 10px;
  align-items: center;
}
.remove {
  color: deepskyblue;
  cursor: pointer;
}
.favourites-button {
  cursor: pointer;
  font-size: 25px;
}
.product-info {
  display: flex;
}
.product-info-details {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: baseline;
}
.separator {
  padding: 0 10px;
}
.cart-total {
  display: flex;
  justify-content: flex-end;
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
