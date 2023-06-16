<script setup lang="ts">
import { ref } from 'vue'

type newTaskType = {
    name: string,
    hours: number,
    done: boolean
}

const taskList = ref([])
const newTask = ref('')

const addTask = (task) => {
  taskList.value.push(task)
    newTask.value = ""
}
</script>

<template>
  <section class="flex flex-col gap-12">
    <div class="text-lg flex gap-4 items-center">
      <input type="text" v-model="newTask" class="text-black" />
      <button @click="addTask(newTask)" class="">Add</button>
    </div>
    <div class="bg-gray-700 p-4">
      <p v-for="item in taskList" :key="item">
        {{ item }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>