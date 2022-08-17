    <script setup>
    import { ref } from 'vue';
    import Modal from './elements/Modal.vue';
    
    const loading = ref(false);
    const newTodo = ref({});
    const emits = defineEmits(['closeModal']);
    
    const props = defineProps({
        modalOpen: {
            type: Boolean,
            required: true
        },
    })
    
    
    function submitModal() {
        return console.log('submit')
    }
    
    </script>
    <template>
    <Modal v-if="modalOpen" @cancel="$emit('closeModal')">
        <template v-slot:title>
            <span class="text-sm">Nueva todo</span>
        </template>
        <template v-slot:body>
            <div v-if="!loading" class="flex flex-col">
                <span class="font-bold">Titulo</span>
                <input v-model="newTodo.title" type="text" class="pl-2 border rounded">
                <br>
                <span class="font-bold">Descripción</span>
                <textarea v-model="newTodo.description" class="p-2 border rounded"></textarea>
            </div>
            <div v-if="loading" class="flex justify-center">
                CARGANDO
            </div>
        </template>
        <template v-slot:footer>
            <div class="w-full flex justify-center gap-4">
                <button class="px-2 py-1 rounded bg-secondary hover:bg-main text-white cursor-pointer"
                    :disabled="loading" @click="$emit('closeModal')">
                    CANCELAR
                </button>
                <button class="px-2 py-1 rounded bg-secondary hover:bg-main text-white cursor-pointer"
                    :disabled="loading" @click="$emit('submitModal')">
                    GUARDAR
                </button>
            </div>
        </template>

    </Modal>
</template>