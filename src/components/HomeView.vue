<script setup lang="ts">
import { ref } from 'vue'

type newTaskType = {
  name: string
  hours: number
  done: boolean
}

const taskList = ref([])
const newTask = ref({ name: '', hours: 0, done: false } as newTaskType)

const addTask = () => {
  taskList.value.push({
      name: newTask.value.name,
      hours: newTask.value.hours,
      done: newTask.value.done,
  })
}
</script>

<template>
  <section class="flex flex-col gap-12">
    <div class="text-lg flex gap-4 items-center">
      <input type="text" v-model="newTask.name" class="text-black" placeholder="name" />
      <input type="number" v-model="newTask.hours" class="text-black" />
      <button @click="addTask" class="">Add</button>
    </div>
    <div class="bg-gray-700 p-4">
      <p v-for="(item, index) in taskList" :key="index">
        {{ JSON.stringify(item, null, 2) }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>