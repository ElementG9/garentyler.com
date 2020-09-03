<template lang="pug">
  .container
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Container extends Vue {}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}
</style>
