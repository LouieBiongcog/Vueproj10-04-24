<template>
    <div class="container mt-5 text-center animate__animated animate__fadeIn">
      <div class="jumbotron bg-light p-5 rounded">
        <hr class="my-4">
        <p>Hi Everyone I'm <strong>Louiejay Biongcog</strong> <br>A 3rd year student of BSIT</p>
        <router-link to="/todo" class="btn btn-primary btn-lg mt-3" role="button"
          @mouseover="hoverEffect" @mouseleave="removeHoverEffect">Go to Todo App
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      hoverEffect(event) {
        event.target.classList.add('btn-danger');
        event.target.classList.remove('btn-primary');
      },
      removeHoverEffect(event) {
        event.target.classList.remove('btn-danger');
        event.target.classList.add('btn-primary');
      }
    }
  };
  </script>
  
  <style scoped>
  .jumbotron {
    transition: transform 0.5s ease-in-out;
  }
  .jumbotron:hover {
    transform: scale(1.05);
  }
  </style>
  