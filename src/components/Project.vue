<template lang="pug">
  .project
    Container
      a(v-if="!!projectLink", :href="projectLink", target="_blank")
        h3 {{ projectName }}
      h3(v-else) {{ projectName }}
    Paragraph #[slot]
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Paragraph from "@/components/Paragraph.vue";
import Container from "@/components/Container.vue";

@Component({
  components: {
    Paragraph,
    Container
  },
  props: ["projectName", "projectLink"]
})
export default class Project extends Vue {}
</script>

<style scoped lang="scss">
.project {
  margin-bottom: 30px;
  h3 {
    margin-bottom: 10px !important;
  }
}
</style>
