<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import { apiGetTodos } from "@/utils/endpoints.js";
import { normalizeTodos } from "@/utils/parsers.js";
import TodoCard from '../components/TodoCard.vue';

let modalVisible = ref(false);
let loading = ref(false);
let todos = ref([]);
const todosNotDone = computed(() => {
  return todos.value.filter(t => !t.done);
})
let error = ref(null);

/* function add(todo) {
  todos.value = [...todos.value, todo]
  console.log(todos)
}
 */
const fetchTodos = async () => {
  loading.value = true;
  try {
    const data = await fetch(apiGetTodos())
    const res = await data.json()
    todos.value = res;
    console.log(todos.value);
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}
fetchTodos();
</script>
<template>
  <div>
    <h1 class="text-5xl p-5">Mis tareas view</h1>
    <div class="d-flex flex-col">
      <TodoCard class="p-2 m-5" v-for=" todo in todos" :key="todo.id" :todo="todo">
      </TodoCard>
    </div>

  </div>
</template>

<style>
</style>
