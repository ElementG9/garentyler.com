import Vue from "vue";
import VueRouter from "vue-router";
import App from "./views/App.vue";

Vue.use(VueRouter);

import Main from "./views/Main.vue";
import Projects from "./views/Projects.vue";
const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/projects",
    component: Projects
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
