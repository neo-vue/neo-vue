<template>
  <neo-navbar padding="10px" :backgroundColor="backgroundColor"
              :color="darkMode ? colorsTheme.light : colorsTheme.dark" :items="navItems" border fixed ref="navbar">
    <template v-slot:icon>
      <neo-profile img="../../../../logo.png" border="none" background-color="transparent" shadow="none" rounded="circle" width="50px" height="50px" class="mr-10" />
    </template>
    <template v-slot:title>
      <h2 class="ml-10">Neo VUE</h2>
    </template>
    <template v-slot:right-items>
      <neo-navbar-item label="About" :backgroundColor="backgroundColor"
                       :color="darkMode ? colorsTheme.light : colorsTheme.dark" to="/about" />
      <neo-profile class="mr-10" rounded="circle" @click="updateDarkMode()"
                   :backgroundColor="darkMode ? 'dark' : 'white'" width="40px" height="40px">
        <box-icon v-if="!darkMode" name="sun" />
        <box-icon v-else name="moon" />
      </neo-profile>
    </template>
  </neo-navbar>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useTheme } from '@neo-vue/neo-ui';
import { useRoute } from 'vue-router';

const $route = useRoute();

watch($route, (value) => {
  console.log(value);
}, {immediate: true})

let navItems = ref([
  { label: 'Home', position: 'left', to: '/' },
  { label: 'Get started', position: 'left', to: '/docs/get-started' },
  { label: 'Components', position: 'left', to: '/docs/components' },
  { label: 'About', position: 'right', to: '/docs/about' },
]);

const {darkMode, theme, setTheme,setDarkMode} = useTheme();

const isMobile = computed(() => {
  return window.innerWidth <= 768;
});

const backgroundColor = computed(() => {
  if($route.name === 'home' && !isMobile.value) return 'transparent';
  else  return darkMode.value ? colorsTheme.value.dark : colorsTheme.value.light;
})

const colorsTheme = computed(() => {
  return {
    light: getComputedStyle(document.documentElement).getPropertyValue('--light-theme-color'),
    dark: getComputedStyle(document.documentElement).getPropertyValue('--dark-theme-color'),
  };
});

onMounted(() => {
  // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //   darkTheme.value = true;
  // }
  //
  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  //   darkTheme.value = event.matches;
  // });
  if(isMobile.value) {
    navItems.value.push({ label: 'Utilities', to: '/docs/utilities', position: 'left'});
  }
});

function updateDarkMode() {
  setDarkMode(!darkMode.value);
  if(darkMode.value) {
    setTheme({...theme, schemeColors: {
        dark: theme.value.schemeColors?.light || 'white',
        light: theme.value.schemeColors?.dark || 'black'
      }, primary: 'pink'});
  } else {
    setTheme({...theme, schemeColors: {
        dark: theme.value.schemeColors?.light || 'black',
        light: theme.value.schemeColors?.dark || 'white'
      }, primary: 'yellow'})
  }
}

// watch(darkTheme, (newValue) => {
//   if (newValue) {
//     window.dispatchEvent(new CustomEvent('dark-theme', { detail: { darkTheme: true } }));
//     document.body.style.backgroundColor = colorsTheme.value.dark;
//     document.body.style.color = colorsTheme.value.light;
//   } else {
//     window.dispatchEvent(new CustomEvent('dark-theme', { detail: { darkTheme: false } }));
//     document.body.style.backgroundColor = colorsTheme.value.light;
//     document.body.style.color = colorsTheme.value.dark;
//   }
// });
</script>

<style>

</style>
