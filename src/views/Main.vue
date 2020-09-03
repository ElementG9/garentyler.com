<template lang="pug">
  .main
    h1 Hi, I'm Garen!
    Paragraph.
      I’m a junior in high school, and I program, mountain bike, and ski for fun.
      I mountain bike and ski competitively with my school, but I program for fun and for work.
      I started out my programming adventure on
      #[a(href="https://scratch.mit.edu/", target="_blank") Scratch], then I learned a little Python.
      Eventually, I took the
      #[a(href="https://www.khanacademy.org/computing/computer-programming/programming", target="_blank") Intro to JS course]
      on #[a(href="https://www.khanacademy.org/", target="_blank") Khan Academy]
      and learned the basics of JavaScript.
      Since then, I’ve learned how to use
      #[a(href="https://nodejs.org/en/", target="_blank") Node],
      #[a(href="https://expressjs.com/", target="_blank") Express],
      #[a(href="https://www.nginx.com/", target="_blank") Nginx],
      #[a(href="https://vuejs.org/", target="_blank") Vue],
      #[a(href="https://angular.io/", target="_blank") Angular],
      #[a(href="https://cloud.google.com/", target="_blank") Google Cloud Platform],
      and #[a(href="https://aws.amazon.com/", target="_blank") AWS].
      Using these libraries and services, I’ve made or worked on many professional
      web applications, mostly for
      #[a(href="https://www.inboundsystems.com/", target="_blank") Inbound Systems].
      Singlehandedly, I made
      #[a(href="https://easyintakeforms.com/", target="_blank") Easy Intake Forms]
      for registering new dental patients, and the
      #[a(href="https://www.dvminsider.com/vet500/", target="_blank") Vet500],
      #[a(href="https://www.idahosbest.com/", target="_blank") Idaho's Best], and
      #[a(href="https://www.bestofslc.com/", target="_blank") Best of SLC] voting apps.
      I’ve also worked in a team with other developers on more complicated projects such as Best of Awards
      for creating and managing those voting apps automatically, and
      #[a(href="https://www.revenuejump.com/", target="_blank") RevenueJump]
      for increasing the number and quality of reviews. Programming isn’t just
      for work though! I’ve also been experimenting with
      #[a(href="https://www.rust-lang.org/", target="_blank") Rust],
      #[a(href="https://www.opengl.org/", target="_blank") OpenGL],
      and #[a(href="https://unity.com/", target="_blank") Unity]
      as some of my many side projects.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Paragraph from "@/components/Paragraph.vue";

@Component({
  components: {
    Paragraph
  }
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">
.main {
  text-align: center;
}
</style>
