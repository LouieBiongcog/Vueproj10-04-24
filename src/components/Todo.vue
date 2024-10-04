<template>
    <div class="container mt-5">
      <div class="card shadow p-4">
        <h2 class="text-center text-success">Todo App</h2>
        <ul class="list-group mb-4">
          <li 
            v-for="(task, index) in tasks" 
            :key="index" 
            class="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn"
          >
            <div v-if="editIndex !== index">
              {{ task }}
            </div>
            <div v-else>
              <input 
                v-model="editTask" 
                @keyup.enter="saveEdit(index)" 
                class="form-control" 
                placeholder="Edit your task"
              />
            </div>
  
            <div class="button-group">
              <button 
                v-if="editIndex !== index" 
                @click="startEdit(index)" 
                class="btn btn-sm btn-outline-primary"
              >
                Edit
              </button>
              <button 
                v-else 
                @click="saveEdit(index)" 
                class="btn btn-sm btn-outline-success"
              >
                Save
              </button>
              <button 
                @click="removeTask(index)" 
                class="btn btn-sm btn-outline-danger ml-2"
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
  
        <input v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Add a task" />
        <button @click="addTask" class="btn btn-success mt-3 w-100">Add Task</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [], 
        newTask: '',
        editTask: '', 
        editIndex: null
      };
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      startEdit(index) {
        this.editIndex = index; 
        this.editTask = this.tasks[index]; 
      },
      saveEdit(index) {
        if (this.editTask) {
          this.tasks.splice(index, 1, this.editTask); 
          this.editTask = '';
          this.editIndex = null; 
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    animation: bounceIn 1s ease-out;
  }
  
  .list-group-item {
    transition: background-color 0.3s ease;
  }
  .list-group-item:hover {
    background-color: #f8f9fa;
    transform: translateX(10px);
  }
  
  .button-group {
    display: flex;
    gap: 10px;
  }
  
  @keyframes bounceIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  