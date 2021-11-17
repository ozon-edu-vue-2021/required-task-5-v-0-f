<template>
  <div class="home">
    <h1>Магазин "Магазин"</h1>
    <router-link :to="ROUTES.PRODUCTS.path">Посмотреть товары</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  inject: ["ROUTES"],
};
</script>
