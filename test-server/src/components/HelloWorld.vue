<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Neo-vue</h1>

    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "HelloWorld"
})
</script>
