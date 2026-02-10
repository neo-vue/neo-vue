<template>
  <div class="section">
    <div class="title">Get started</div>
    <div class="content">
      <p>
        Neo VUE is a component library for Vue 3. It is built with TypeScript and SCSS.
      </p>

      <div class="subsection">
        <div class="title">Download</div>
        <div class="content">
          <p>
            To install Neo VUE, run the following command:
          </p>
          <pre class="mb-10"><DocCode value="npm install neo-vue" lang="bash" theme="light" /></pre>
          <p class="mb-10">
            Or if you prefer yarn:
          </p>
          <pre class="mb-10"><DocCode value="yarn add neo-vue" lang="bash" theme="light" /></pre>
        </div>
      </div>

      <div class="subsection mb-20">
        <div class="title">Installation</div>
        <div class="content">
          <p>
            To use Neo VUE, you need to import the library in your main.ts file:
          </p>
          <pre class="mb-10"><DocCode :value="codeInstall" theme="light" /></pre>

          <p>
            You can also add options to plugin, for custom final color rendering of components like border, shadow, or main colors :
          </p>
          <pre class="mb-10"><DocCode :value="codeThemeOptions" theme="light" /></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DocCode from '../../components/doc-code.vue';
import { getCurrentInstance } from 'vue';

const codeInstall = `import { createApp } from 'vue';
import NeoVue from '@neo-vue/neo-ui';
import App from './App.vue';

const app = createApp(App);

app.use(NeoVue);

app.mount('#app');`

const codeThemeOptions = `createApp(App);
app.use(NeoVue, {
  theme: {
    primary: '#3333',
    secondary: '#3333',
    accent: '#3333',
    info: '#3333',
    warning: '#3333',
    error: '#3333',
    success: '#3333',
    borderColor: '#3333',
    shadowColor: '#3333',
  }
});

app.mount('#app');`

</script>

<style>
</style>
