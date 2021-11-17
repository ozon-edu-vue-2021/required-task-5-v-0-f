<template>
  <div class="products">
    <h1>Товары</h1>
    <div class="products-list">
      <Product
        v-for="product of products"
        :key="product.uid"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import { mapState } from "vuex";

export default {
  name: "Products",
  components: {
    Product,
  },
  computed: mapState({
    products: (state) => state.products.products,
  }),
};
</script>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
