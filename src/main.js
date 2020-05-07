import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueCookies,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
