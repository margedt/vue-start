import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {
  type newTaskType = {
    name: string
    hours: number
    done: boolean
  }

  const todoList = ref([] as newTaskType[])

  const addTodo = (newTask: newTaskType) => {
    todoList.value.push(newTask)
  }

  return { todoList, addTodo }
})
