<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import { createPinia, storeToRefs } from "pinia";
const pinia = createPinia();
</script>

<template>
  <header>
    <Navbar  />
  </header>

  <RouterView />

</template>

<style scoped>
</style>
