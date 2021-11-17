import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import cart from "./cart";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  modules: {
    products,
    cart
  },
});
