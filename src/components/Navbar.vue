   <script setup>
   import { onMounted, ref, toRefs } from "vue";
   const showMenu = ref(true);
   const props = defineProps({
       userId: {
           type: Number,
       }
   })
   const { userId } = toRefs(props)
   
   </script>
   <template>

    <div>
        <div class="bg-gray-500">
            <nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <RouterLink to="/">
                        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
                    </RouterLink>

                    <div @click="showMenu = !showMenu" class="flex md:hidden">
                        <button type="button"
                            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <ul :class="showMenu ? 'flex' : 'hidden'"
                    class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <RouterLink :to="{ name: 'home' }" class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        Inicio
                    </RouterLink>
                    <RouterLink :to="{ name: 'schedule', params: { userId: userId } }"
                        class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        Mis tareas
                    </RouterLink>
                    <RouterLink :to="{ name: 'done-tasks' }"
                        class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        Tareas completadas
                    </RouterLink>
                </ul>
            </nav>
        </div>
    </div>

</template>
