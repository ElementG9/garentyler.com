<template lang="pug">
  #app
    Nav
    transition(name="fade", mode="out-in")
      router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;

  // Light theme.
  // background-color: #f2f2f2;
  // color: #2c3e50;

  // Dark theme.
  background-color: #222;
  color: #f2f2f2;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  line-height: 1.8;

  a {
    text-decoration: none;
    // Light theme.
    // color: #00a651;
    // Dark theme.
    color: #2fbf72;
    &:hover {
      // Light theme.
      // color: #009444;
      // Dark theme.
      color: #26995b;
    }
  }

  h1 {
    padding: 0px;
    margin: 50px;
    font-size: 50px;
  }
  h2 {
    padding: 0px;
    margin: 30px;
    font-size: 40px;
  }
  h3 {
    padding: 0px;
    margin: 20px;
    font-size: 30px;
  }

  hr {
    margin: 36px 0px;
    padding: 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    border: 1px solid #bbb;
  }
  .smallhr {
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    border: 1px dashed #ccc;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s !important;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0 !important;
    transform: translateY(30px) !important;
  }
}
</style>
