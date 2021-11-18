<template>
  <div class="products">
    <h1>Товары</h1>
    <div class="products-list">
      <Product
        v-for="product of productsList"
        :key="product.uid"
        :product="product"
      />
    </div>
    <div v-show="showFavourites && productsList.length === 0">
      Нет избранных товаров
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import { mapGetters } from "vuex";

export default {
  name: "Products",
  props: ["showFavourites"],
  components: {
    Product,
  },
  computed: {
    ...mapGetters("products", ["products", "favouriteProducts"]),
    productsList() {
      return this.showFavourites ? this.favouriteProducts : this.products;
    },
  },
};
</script>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
