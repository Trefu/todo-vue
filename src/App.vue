<script setup>
import { RouterView } from "vue-router";
import { ref, toRef } from "vue";

import Navbar from "./components/Navbar.vue";
const userId = ref(1);

</script>

<template>
  <header>
    <Navbar :userId=userId />
  </header>

  <RouterView />

</template>

<style scoped>
</style>
