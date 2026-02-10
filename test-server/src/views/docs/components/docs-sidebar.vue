<template>
  <div class="section">
    <div class="title">Sidebar</div>
    <div class="content">
      <p><strong>Neo-sidebar</strong> is a vertical menu. It let you put items with actions or redirections on other pages.</p>

      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively the sidebar component in your template:</p>

          <DocExample :code-snippets="[{ code: codeBasicJS, lang: 'js' }, { code: codeBasic, lang: 'html' }]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-sidebar title="My Sidebar" :items="items" :width="isMobile ? '50dvw' : '20%'" />
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Advanced</div>
        <div class="content">
          <p>When you set a <code>backgroundColor</code> props on your sidebar component, it make a darker color on categories title <strong>ONLY</strong> if color is hexadecimal format : </p>

          <DocExample :code-snippets="[{ code: codeAdvanced, lang: 'html' }]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-sidebar title="My Sidebar" :items="items" background-color="#e7e7e7" :width="isMobile ? '50dvw' : '20%'" />
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your drawer:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your drawer:</p>
          <DocSlotsTable :items="slots" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DocCode from '../../../components/doc-code.vue';
import DocPropsTable from '../../../components/doc-props-table.vue';
import DocSlotsTable from '../../../components/doc-slots-table.vue';
import { ref } from 'vue';
import { defaultProps } from '@/views/docs/constants';
import DocExample from '@/components/doc-example.vue';


const codeBasic = `<neo-sidebar title="My Sidebar" :items="items" />`;
const codeAdvanced = `<neo-sidebar title="My Sidebar" :items="items" background-color="#e7e7e7" :width="isMobile ? '50dvw' : '20%'" />`;
const isMobile = ref(window.innerWidth <= 768);

const items = [
  { label: 'Home', category: 'One'},
  { label: 'About', category: 'One'},
  { label: 'Contact', category: 'One'},
  { label: 'Profile', category: 'Two'},
  { label: 'Logout', category: 'Two'},
]

const codeBasicJS = `const items = [
  { label: 'Home', category: 'One'},
  { label: 'About', category: 'One'},
  { label: 'Contact', category: 'One'},
  { label: 'Profile', category: 'Two'},
  { label: 'Logout', category: 'Two'},
]`;

const props = [
  { name: "title", type: ["String"], required: false, default: 'Sidebar', description: "Sidebar default header title" },
  { name: "items", type: ["[Object]"], required: false, default: '[]', description: "Sidebar items list ({label: string, to?: string, category?: string, onClick?: () => void})" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Sidebar content" },
  { name: "activator", props: ["show (Boolean)", "open (Function)"], description: "Zone which will make appears drawer (neo-button by default)" },
  { name: "header", props: [], description: "Sidebar header" },
  { name: "content", props: ["items (Object[])"], description: "Sidebar content" }
]
</script>

<style scoped>
.section {
  max-width: 100%;
}
</style>
