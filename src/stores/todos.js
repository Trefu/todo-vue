import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore('todos', () => {
    const todos = ref([]);
    
    function changeStateTodo(todoId, state) {
        const todoIndex = todos.value.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) return console.error('not found ' + todoIndex);
        todos.value[todoIndex].done = state
    }
    return { todos, changeStateTodo }
})