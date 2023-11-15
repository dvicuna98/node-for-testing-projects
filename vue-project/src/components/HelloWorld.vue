<script setup lang="ts">
defineProps<{
  msg: string
}>()

function setGade(){
  console.log('gade')
  window.$chatwoot.setCustomAttributes({
    program: "GADE",
  });
}

function setGND(){
  console.log('gade')
  window.$chatwoot.setCustomAttributes({
    program: "GND",
  });
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <button @click="setGade">Test programa GADE</button>
    <button @click="setGND">Test programa GND</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
