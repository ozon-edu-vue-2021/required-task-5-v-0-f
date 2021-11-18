<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="products-list">
      <CartProduct
        v-for="product of products"
        :key="product.uid"
        :product="product"
      />
    </div>
    <div v-if="products.length === 0">Корзина пуста</div>
    <template v-else>
      <div class="cart-total">Общая стоимость: {{ totalPrice }} ₽</div>
      <div class="order-button" @click="checkout">Оформить</div>
    </template>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartProduct,
  },
  computed: mapGetters("cart", ["products", "totalPrice"]),
  methods: {
    checkout() {
      // prettier-ignore
      const productsText = this.products.map((product) =>
        `${product.name} ${product.price} ₽ х ${product.quantity} шт`
      ).join("\n");
      alert(productsText);
    },
  },
};
</script>

<style scoped>
.products-list {
  display: flex;
  flex-direction: column;
}
.cart-total {
  display: flex;
  justify-content: flex-end;
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
