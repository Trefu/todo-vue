<script setup>
import { ref, computed } from 'vue'
import { apiGetTodos } from '../utils/endpoints';
import TodoCard from '../components/TodoCard.vue';
import { useTodosStore } from '@/stores/todos.js'
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore();
const todosStore = useTodosStore();

async function fetchTodos() {
  try {
    const data = await fetch(apiGetTodos(userStore.userId))
    const res = await data.json()
    todosStore.todos = res;
  } catch (error) {
    console.log(error)
  }
}

fetchTodos()
</script>

<template>
  <main class="container mx-auto py-4">
    <div class="d-flex flex-col">
      <h1 class="text-6xl">Mis tareas completadas</h1>
      <p class="text-red-300 text-3xl my-5" v-if="todosStore.doneYet.length <= 0">No hay tareas completadas</p>
      <TodoCard v-for=" todo in todosStore.doneYet" :key="todo.id" :todo="todo">
      </TodoCard>
    </div>
    <div class="d-flex flex-col">
      <h2 class="text-5xl">Tareas a hacer</h2>
      <p class="text-green-300 text-3xl my-5" v-if="todosStore.notDoneYet.length <= 0">No hay tareas sin completar</p>
      <TodoCard v-for="todo in todosStore.notDoneYet" :key="todo.id" :todo="todo">
      </TodoCard>
    </div>
  </main>
</template>
