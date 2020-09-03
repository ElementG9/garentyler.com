<template lang="pug">
  .paragraph
    p #[slot]
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Paragraph extends Vue {}
</script>

<style scoped lang="scss">
.paragraph {
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    max-width: 50vw;
  }
}
</style>
