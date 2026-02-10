<template>
  <div class="not-found grid-background">
    <neo-card padding="2rem">
      <template #header>
        <h2>Page Not Found</h2>
      </template>

      <div class="content">
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You can go back to the <router-link to="/">home page</router-link>.</p>
      </div>

      <template #footer>
        <neo-button color="primary" background-color="#e7e1e1" @click="$router.push('/')">Go to Home</neo-button>
      </template>
    </neo-card>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.grid-background {
  background-image:
    linear-gradient(to right, #d9d2d2 1px, transparent 1px),
    linear-gradient(to bottom, #d9d2d2 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
<script setup lang="ts">
</script>
