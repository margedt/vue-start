<script setup lang="ts">
import { ref } from "vue";
import {useTodoListStore} from "@/stores/todoList";

type newTaskType = {
    name: string
    hours: number
    done: boolean
}

const store = useTodoListStore()

const newTask = ref({ name: '', hours: 0, done: false } as newTaskType)

const addTask = () => {
    store.addTodo({
        name: newTask.value.name,
        hours: newTask.value.hours,
        done: newTask.value.done,
    })
}

</script>

<template>
  <div class="flex flex-col gap-4 bg-slate-950 p-4">
    <h1>Use Store</h1>
    <div class="text-lg flex gap-4 items-center">
      <input type="text" v-model="newTask.name" class="text-black p-2 border border-blue-700 rounded bg-blue-100" placeholder="name" />
      <input type="number" v-model="newTask.hours" class="text-black p-2 border border-blue-700 rounded bg-blue-100" />
      <button @click="addTask" class="rounded border border-blue-700 p-2 bg-blue-300 text-blue-950">Add</button>
    </div>
  </div>
</template>

<style scoped>

</style>