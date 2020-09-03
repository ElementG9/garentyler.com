<template lang="pug">
  .nav
    router-link(to="/")
      img(alt='My logo', src='@/assets/G_logo.svg').G_logo
    a(href="https://github.com/ElementG9") GitHub
    router-link(to="/projects") Projects
    a(href="mailto:garentyler@gmail.com") Contact
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
.nav {
  background-color: #333;
  background-color: #111;
  overflow: hidden;
  height: 58px;

  a {
    float: left;
    display: block;
    text-align: center;
    color: #f2f2f2 !important; // Override link colors.
    line-height: 1;

    &:first-child {
      padding: 10px;
      height: 38px;
    }

    &:not(:first-child) {
      font-size: 20px !important;
      padding: 20px;
      color: #f2f2f2;
      height: 18px;

      &:hover {
        color: #f2f2f2;
        background-color: #009444; // Darker green.
        // background-color: #00a651; // Lighter green.
      }
    }
  }

  .G_logo {
    width: 40px;
    height: 40px;
    margin: 0px;
    padding: 0px;
  }
}
</style>
