<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
const userId = 1;

</script>

<template>
  <header>
    <Navbar :userId=userId />
  </header>

  <RouterView />

</template>

<style scoped>
</style>
