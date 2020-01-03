import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import VueChatScroll from "vue-chat-scroll";

Vue.use(firebase);
Vue.use(VueChatScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
