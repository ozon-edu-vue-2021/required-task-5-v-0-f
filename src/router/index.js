import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ROUTES from "./routes";

Vue.use(VueRouter);

const routesConfig = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home,
    // redirect once from "/" to "/products"
    beforeEnter: (to, from, next) => {
      if (to.path === from.path) next(ROUTES.PRODUCTS.path);
      else next();
    },
  },
  {
    path: ROUTES.PRODUCTS.path,
    name: ROUTES.PRODUCTS.name,
    component: Products,
  },
  {
    path: ROUTES.CART.path,
    name: ROUTES.CART.name,
    component: () => import(/* webpackChunkName: "cart" */ "@/pages/Cart"),
  },
  {
    path: ROUTES.FAVOURITES.path,
    name: ROUTES.FAVOURITES.name,
    component: Products,
  },
  {
    path: "*",
    redirect: ROUTES.HOME.path,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routesConfig,
});

export default router;
