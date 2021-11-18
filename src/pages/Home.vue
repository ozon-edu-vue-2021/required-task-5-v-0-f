<template>
  <div class="home">
    <h1>Магазин "Магазин"</h1>
    <router-link :to="ROUTES.PRODUCTS.path">Посмотреть товары</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  inject: ["ROUTES"],
};
</script>
