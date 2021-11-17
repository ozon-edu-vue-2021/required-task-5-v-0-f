<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="cart-products-list">
      <CartProduct
        v-for="product of products"
        :key="product.uid"
        :product="product"
      />
    </div>
    <div class="cart-total>">Общая стоимость: </div>
    <div class="order-button">Оформить</div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct";
import { mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    CartProduct,
  },
  computed: mapState({
    products: (state) => state.products.products,
  }),
};
</script>

<style scoped>
.products-list {
  display: flex;
  flex-direction: column;
}
.cart-total {
  margin: 20px 0;
}
.order-button {
  background: cornflowerblue;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  display: inline-block;
}
</style>
