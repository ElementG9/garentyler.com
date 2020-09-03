<template lang="pug">
  .projects
    h1 Projects
    hr
    h2 Professional Projects
    Project(projectName="Easy Intake Forms")#easyintakeforms.
      #[a(href="https://easyintakeforms.com/", target="_blank") Easy Intake Forms]
      was a relatively simple project - rewrite a form using Flash with modern HTML5.
      This was my first professional project, and it used a simple Linux, NodeJS, and Express stack.
      Some loading was done client-side, with JQuery and AJAX.
    Project(projectName="Vet500")#vet500.
      The #[a(href="https://www.dvminsider.com/vet500/", target="_blank") Vet500]
      is a voting platform comparing veterinarians and animal hospitals across the country.
      By the end of voting in September 2019, it received a few thousand unique votes.
      This was my first voting platform, and it required knowing Linux server management,
      NodeJS and Express web servers, Firebase, and Twilio to validate phone numbers.
    Project(projectName="Idaho's Best")#idahosbest.
      #[a(href="https://www.idahosbest.com/", target="_blank") Idaho's Best]
      is similar to the Vet500 in how it functions, but it's targeted for
      Idaho businesses instead of nationwide veterinarians. For 2020, we received
      tens of thousands of votes from over ten thousand unique voters with verified
      phone numbers.
    Project(projectName="Best of SLC")#bestofslc.
      #[a(href="https://www.bestofslc.com/", target="_blank") Best of SLC]
      was rebuilt from the ground up based on the design of Idaho's Best,
      but with an updated, more modular structure. It's almost exactly the
      same user interface but with revamped internals. It was even larger than
      Idaho's Best for 2020 voting, making it most widely used project to date.
    Project(projectName="Best of Awards")#bestofawards.
      Best of Awards is the brand new admin user interface for creating and managing
      voting platforms like Idaho's Best and Best of SLC. Instead of using Firebase,
      this project used AWS services like DynamoDB and Lambda, meaning that I
      learned how to use those too. I wasn't alone in developing this one, and I worked
      with another senior developer to make this.
    hr.smallhr
    h2 Personal Projects
    Project(projectName="Pivot")#pivot.
      #[a(href="https://github.com/ElementG9/Pivot", target="_blank") Pivot]
      is my toy programming language. The goal is to better understand what
      compilers do and how programming languages work, and to potentially create something useful.
    Project(projectName="ghOSt")#ghost.
      #[a(href="https://github.com/ElementG9/ghOSt", target="_blank") ghOSt]
      is my experimental operating system. I'm trying to better understand
      what operating systems do and the scale of current operating systems.
    Project(projectName="Clander")#clander.
      #[a(href="https://github.com/ElementG9/Clander", target="_blank") Clander]
      is a simple calendar app. I was working on it with my friend Danton.
    Project(projectName="Composition")#composition.
      #[a(href="https://github.com/Unary-Byte-Software/Composition", target="_blank") Composition]
      is a fast Minecraft server targeting version 1.8.9, and I'm also working
      on it with my friend Danton.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Project from "@/components/Project.vue";

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue {}
</script>

<style scoped lang="scss">
.projects {
  text-align: center;
}
</style>
