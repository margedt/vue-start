<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import ToDoList from "@/components/ToDoList.vue";
import ToDoListWithStore from "@/components/ToDoListWithStore.vue";
import ToDoFormWithStore from "@/components/ToDoFormWithStore.vue";

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
const toggleDone = (item) => {
    item.done = !item.done
}
</script>

<template>
  <section class="flex flex-col gap-12">
    <div class="bg-blue-950 p-4 flex flex-col gap-4">
      <h1>Not component</h1>
      <div class="text-lg flex gap-4 items-center">
        <input type="text" v-model="newTask.name" class="text-black p-2 border border-blue-700 rounded bg-blue-100" placeholder="name" />
        <input type="number" v-model="newTask.hours" class="text-black p-2 border border-blue-700 rounded bg-blue-100" />
        <button @click="addTask" class="rounded border border-blue-700 p-2 bg-blue-300 text-blue-950">Add</button>
      </div>
    </div>

    <ToDoFormWithStore/>

    <div class="bg-gray-700 p-4 flex flex-col gap-4">
      <h1>Not component</h1>
      <div
          v-for="(item, index) in taskList"
          :key="index"
          class="p-2 rounded border flex gap-8 items-center justify-around"
          :class="item.done ? 'bg-green-300 text-green-950 border-green-700' : 'bg-red-300 text-red-950 border-red-700'"
      >
        <CheckIcon
            v-if="item.done"
            class="h-5 w-5 cursor-pointer"
            @click="toggleDone(item)"
        />
        <XMarkIcon
            v-else
            class="h-5 w-5 cursor-pointer"
            @click="toggleDone(item)"
        />
        <p
            class="font-bold text-lg flex gap-8"
            :class="item.done ? 'line-through' : ''"
        >
          <span>{{item.name}}</span>
          <span>{{item.hours}}</span>
        </p>
      </div>
    </div>

    <ToDoList :list="taskList"/>

    <ToDoListWithStore/>
  </section>
</template>

<style scoped></style>