<script setup>
import { ref } from 'vue'
import { apiGetTodos } from '../utils/endpoints';
import TodoCard from '../components/TodoCard.vue';
import { useTodosStore } from '@/stores/todos.js'
import { useUserStore } from '@/stores/user.js'
import ModalNewTodo from '../components/ModalNewTodo.vue';
const userStore = useUserStore();
const todosStore = useTodosStore();
const modalOpen = ref(true);

async function fetchTodos() {
  try {
    const data = await fetch(apiGetTodos(userStore.userId))
    const res = await data.json()
    todosStore.todos = res;
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

function cancelModal() {
  return modalOpen.value = false;
}

fetchTodos()
</script>

<template>
  <main class="container mx-auto py-4">
    <div class="d-flex flex-col">
      <h1 class="text-6xl">Mis tareas</h1>
      <p class="text-red-300 text-3xl my-5" v-if="todosStore.todos.length <= 0">No hay tareas.</p>
      <TodoCard v-for="(todo) in todosStore.todos" :key="todo.id" :todo="todo">
      </TodoCard>
    </div>

    <ModalNewTodo :modalOpen=modalOpen @close-modal="cancelModal" />
  </main>
</template>
