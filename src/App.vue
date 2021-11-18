<template>
  <div id="app">
    <div id="nav">
      <router-link :to="ROUTES.HOME.path">Главная</router-link> |
      <router-link :to="ROUTES.PRODUCTS.path">Список товаров</router-link> |
      <router-link :to="ROUTES.FAVOURITES.path">❤️ Избранное</router-link> |
      <router-link :to="ROUTES.CART.path">
        <span>🛒 Корзина</span>
        <span v-show="products.length"> ({{ products.length }})</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import ROUTES from "@/router/routes";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      ROUTES,
    };
  },
  computed: mapGetters("cart", ["products"]),
  provide() {
    return {
      ROUTES: this.ROUTES,
    };
  },
  created() {
    this.$store.dispatch("products/fetchProducts");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0 auto;
  padding: 50px;
  max-width: 900px;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
