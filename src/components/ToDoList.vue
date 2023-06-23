<script setup lang="ts">
import {CheckIcon, XMarkIcon} from "@heroicons/vue/24/solid";
const props = defineProps({
    list: Array
})
</script>

<template>
  <div class="bg-gray-700 p-4 flex flex-col gap-4">
    <h1>Use Props</h1>
    <div
        v-for="(item, index) in props.list"
        :key="index"
        class="p-2 rounded border flex gap-8 items-center justify-around"
        :class="item.done ? 'bg-green-300 text-green-950 border-green-700' : 'bg-red-300 text-red-950 border-red-700'"
    >
      <CheckIcon
          v-if="item.done"
          class="h-5 w-5 cursor-pointer"
      />
      <XMarkIcon
          v-else
          class="h-5 w-5 cursor-pointer"
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
</template>

<style scoped>

</style>