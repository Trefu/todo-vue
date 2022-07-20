<script setup>
import { onMounted, reactive, ref } from 'vue';
import { apiGetTodos } from "@/utils/endpoints.js";
import { normalizeTodos } from "@/utils/parsers.js";
import Modal from "../components/elements/Modal.vue";

const loading = ref(false);
const modalVisible = ref(false);
const todos = ref(
  [
    { 'a': 1 },
    { 'a': 2 },
    { 'a': 3 }
  ]
)

function add() {
  todos.value = [...todos.value, { 'a': 5 }]
  console.log('asd')
}

function hideModal() {
  modalVisible.value = false;
}

const error = ref(null);
const fetchTodos = async () => {
  loading.value = true;
  try {
    const data = await fetch(apiGetTodos())
    const res = await data.json()
    console.log(res);
  } catch (error) {
    console.log(error)
  }
}
fetchTodos();
</script>

<template>
  <main>
    <button @click="add">jklkljkl</button>
    <div v-if="loading">Loading</div>
    <div v-if="todos">
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo.a }}
      </li>
    </div>

    <Modal v-if="modalVisible" @cancel="hideModal">
      <template v-slot:title> test </template>
      <template v-slot:body> test </template>
      <template v-slot:footer> test </template>
    </Modal>

    <div v-if="error"> {{ error }}</div>
  </main>
</template>
