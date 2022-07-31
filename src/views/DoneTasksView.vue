<script setup>
import { ref, computed } from 'vue'
import { apiGetTodos } from '../utils/endpoints';
import TodoCard from '../components/TodoCard.vue';
let todos = ref([]);
const userId = ref(1);

const todosDone = computed(() => {
  return todos.value.filter(t => t.done);
})

async function fetchTodos() {
  try {
    const data = await fetch(apiGetTodos(userId.value))
    const res = await data.json()
    todos.value = res;
  } catch (error) {
    console.log(error)
  }
}
fetchTodos()
</script>
<template>
  <div>
    <div class="d-flex flex-col">
      <h1 class="text-6xl">Mis tareas completadas</h1>
      <p class="text-red-300 text-3xl my-5" v-if="todosDone.length <= 0">No hay tareas completadas</p>
      <TodoCard v-for=" todo in todosDone" :key="todo.id" :todo="todo">
      </TodoCard>
    </div>
  </div>

</template>

<style>
</style>
