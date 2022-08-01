<script setup>
import { onMounted, reactive, ref, computed, toRefs } from 'vue';
import { apiGetTodos } from "@/utils/endpoints.js";
import { normalizeTodos } from "@/utils/parsers.js";
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
    console.log(todosStore.todos);
  } catch (error) {
    console.log(error)
  }
}

fetchTodos()

</script>
<template>
  <div>
    <h1 class="text-5xl p-5">Mis tareas view</h1>
    <div class="d-flex flex-col">
      <TodoCard class="p-2 m-5" v-for="todo in todosStore.todos" :key="todo.id" :todo="todo">
      </TodoCard>
    </div>

  </div>
</template>

<style>
</style>
