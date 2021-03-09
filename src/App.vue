<template>
  <the-navbar></the-navbar>
  <router-view/>
</template>


<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  components: {TheNavbar}
}
</script>

<style lang="scss">
@import "~modern-css-reset/dist/reset.min.css";

@font-face {
  font-family: 'Roboto Regular';
  src: url("assets/Roboto-Regular.ttf");
}

body {
  font-family: "Roboto Regular", serif;
}

</style>