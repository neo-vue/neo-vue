<template>
  <Navbar />
  <div class="doc-layout-content">
    <div v-if="!isMobile" class="sidebar-container">
      <neo-sidebar title="" :items="items" :background-color="darkMode ? '#333' : '#E7E1E1'" :color="darkMode ? '#E7E1E1' : '#333'" shadow="none" border="normal" width="100%" />
    </div>
    <div class="content-container paper-texture" :class="{'flex-4': !isMobile}">
      <div class="content">
        <router-view :key="$route.fullPath"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import { useTheme } from '@neo-vue/neo-ui';

const {theme, darkMode} = useTheme();

const items = ref([
  // { label: 'Components', to: '/docs/components' },
  { label: 'Utilities', category: 'Utilities', to: '/docs/utilities'},
  { label: 'Button', category: 'Commons', to: '/docs/components/button'},
  { label: 'Card', category: 'Commons', to: '/docs/components/card'},
  { label: 'Dialog', category: 'Commons', to: '/docs/components/dialog'},
  { label: 'Checkbox', category: 'Form', to: '/docs/components/checkbox'},
  { label: 'Dropdown', category: 'Commons', to: '/docs/components/dropdown'},
  { label: 'Textfield', category: 'Form', to: '/docs/components/textfield'},
  { label: 'Navbar', category: 'Navigation', to: '/docs/components/navbar'},
  { label: 'Drawer', category: 'Navigation', to: '/docs/components/drawer'},
  { label: 'Sidebar', category: 'Navigation', to: '/docs/components/sidebar'},
  { label: 'Step', category: 'Navigation', to: '/docs/components/step'},
  { label: 'Tabs', category: 'Commons', to: '/docs/components/tabs'},
  { label: 'Profile', category: 'Commons', to: '/docs/components/profile'},
  { label: 'Radio', category: 'Form', to: '/docs/components/radio'},
  { label: 'Select', category: 'Form', to: '/docs/components/select'},
  { label: 'Table', category: 'Commons', to: '/docs/components/table'},
  { label: 'Alert', category: 'Commons', to: '/docs/components/alert'},
  { label: 'Badge', category: 'Commons', to: '/docs/components/badge'},
  { label: 'Icons', category: 'Commons', to: '/docs/components/icon'},
])

const sidebarHeight = ref('100%');
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  manageMarginTop(); //manage margin top on page load
})

function manageMarginTop(){
  const contentLayout = document.querySelector('.doc-layout-content') as HTMLElement;
  const navbar = document.querySelector('.neo-navbar') as HTMLElement;

  if(!contentLayout || !navbar) return;

  //TODO create neo-layout that make auto margin of navbar height if it's fixed

  contentLayout.style.marginTop = `${navbar.offsetHeight - 2}px`;
}
</script>

<style>
.doc-layout-content {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
}

.paper-texture {
  background-image:
    radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px);
  background-size: 80px 80px, 32px 32px, 32px 32px;
}

.doc-layout-content .content-container {
  padding: 2rem;
  width: 70%;
  padding-left: 22%;
}

.doc-layout-content .sidebar-container {
  width: 20%;
  position: fixed;
  height: 100%;
}

.content-container code {
  background-color: #333;
  color: #fff;
  padding: 2px 5px;
  border-radius: 5px;
}

.section>.title {
  font-size: 2rem;
  margin: 0;
}

.section>.content {
  padding: 20px;
  max-width: 100dvw;
}

.section .subsection>.title {
  font-size: 1.5rem;
  margin-top: 50px;
}

.section .subsection>.content {
  padding-left: 20px;
}

/*code {
    background-color: var(--dark-theme-color);
    color: var(--light-theme-color);
    padding: 2px 5px;
    border-radius: 5px;
}


@media (prefers-color-scheme: dark) {
  code {
    background-color: var(--light-theme-color);
    color: var(--dark-theme-color);
  }
}*/

@media screen and (max-width: 768px) {
  .doc-layout-content .section:first-child {
    padding: 0px;
  }

  .doc-layout-content .content-container {
    padding: 10px;
    width: calc(100dvw - 20px);
    max-width: calc(100dvw - 20px);
  }

  .doc-layout-content .neo-code {
    width: 90dvw;
  }

  .doc-layout-content table {
    width: 90dvw;
  }

  .section .title {
    font-size: 1.5rem;
  }

  .section>.content {
    padding: 10px;
  }

  .section .subsection .title {
    font-size: 1.2rem;
  }

  .section .subsection .content {
    padding-left: 10px;
  }
}
</style>
