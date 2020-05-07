import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import zhHans from "vuetify/es5/locale/zh-Hans";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: "zh-Hans"
  },
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});
