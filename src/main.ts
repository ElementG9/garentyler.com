import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./views/App.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

// Configure the router.
import Main from "./views/Main.vue";
import Projects from "./views/Projects.vue";
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Main
    },
    {
      path: "/projects",
      component: Projects
    }
  ]
});

// Configure the store.
const store = new Vuex.Store({
  state: {
    currentTheme: "dark"
  },
  mutations: {
    setTheme(state, themeName) {
      document
        ?.getElementById("body")
        ?.classList?.remove(`${state.currentTheme}-theme`);
      state.currentTheme = themeName;
      document
        ?.getElementById("body")
        ?.classList?.add(`${state.currentTheme}-theme`);
    }
  },
  actions: {},
  modules: {}
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
