<script setup>
import { toRefs } from "@vue/reactivity"
import { apiPatchTodo } from "../utils/endpoints"
import { useTodosStore } from "@/stores/todos.js"

const todosStore = useTodosStore();
const props = defineProps({
    todo: {
        type: Object,
        required: true
    },
})

const { todo } = toRefs(props)

/**
 * @param {Boolean} done 
 */
async function submitTaskState() {
    const actualState = todo.value.done;
    try {
        const res = await fetch(apiPatchTodo(todo.value.userId, todo.value.id), {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            'body': JSON.stringify(
                { done: !todo.value.done }
            )

        })
        todosStore.changeStateTodo(todo.value.id, !actualState);
        const data = await res.json();
        console.log(data)
    } catch (error) {
        todosStore.changeStateTodo(todo.value.id, actualState)
        console.log(error)
    }

}

</script>
<template>
    <div
        class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-5 my-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ todo.title }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ todo.description }}</p>
        <div class="flex flex-col py-2 w-30">
            <span class="text-sm font-medium text-green-600 mb-2">Hecha</span>
            <label :for="`todo-${todo.id}`" class="inline-flex relative items-center cursor-pointer">
                <input @click.stop.prevent="submitTaskState" type="checkbox" v-model="todo.done" :id="`todo-${todo.id}`"
                    class="sr-only peer">
                <div
                    class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                </div>
            </label>
        </div>

    </div>
</template>
