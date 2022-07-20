<script setup>
import { onMounted, reactive, ref } from 'vue';
import {APISettings} from '../../api/config.js'
const loading = ref(false);
const state = reactive({
  todos: [
    {
      "a": 2
    },
    {
      "a": 2
    }
  ]
})
onMounted(() => {
  fetchTodos()
})
const error = ref(null);
const fetchTodos = async () => {
  loading.value = true;
  const data = await fetch(APISettings.baseURL + 'todos')
  const res = await data.json()
  console.log(res);
}
</script>

<template>
  <main>
    <div v-if="loading">Loading</div>
    <div v-if="state.todos">
      <li v-for="(todo, i) in state.todos" :key="i">
        {{ todo.a }}
      </li>
    </div>
    <div v-if="error"> {{ error }}</div>
  </main>
</template>
