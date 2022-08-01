import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodosStore = defineStore('todos', () => {
    const todos = ref([]);
    const doneYet = computed(() => {
        return todos.value.filter(t => t.done);
    })
    const notDoneYet = computed(() => {
        return todos.value.filter(t => !t.done);
    })
    return {todos, doneYet, notDoneYet}
})
/* 
    id: "todos",
    state: () => ({
        todos: [],
    }),
    getters: {
        todosDoneYet: (state) => state.todos.filter(t => t.done),
        todosNotDoneYet: (state) => state.todos.filter(t => !t.done)
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
    },
}); */
