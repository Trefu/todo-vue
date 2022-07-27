<script setup>
import { onMounted, reactive, ref, computed, onBeforeMount } from 'vue';
import { apiGetTodos } from "@/utils/endpoints.js";
import { normalizeTodos } from "@/utils/parsers.js";
import TodoCard from '../components/TodoCard.vue';
defineProps({
  userId: {
    type: String,
    required: true
  }
})
let todos = ref([]);
const todosNotDone = computed(() => {
  return todos.value.filter(t => !t.done);
})

let error = ref(null);

async function fetchTodos() {
  try {
    const data = await fetch(apiGetTodos(userId))
    const res = await data.json()
    todos.value = res;
    console.log(todos.value);
  } catch (error) {
    console.log(error)
  }
}

function test() {
  console.log(userId)
}
onMounted(() => {
  test()
})
//fetchTodos()

</script>
<template>
  <div>
    <h1 class="text-5xl p-5">Mis tareas view</h1>
    <div class="d-flex flex-col">
      {{ userId }}
      <!--       <TodoCard class="p-2 m-5" v-for=" todo in todos" :key="todo.id" :todo="todo">
      </TodoCard> -->
    </div>

  </div>
</template>

<style>
</style>
