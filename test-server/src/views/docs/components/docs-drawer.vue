<template>
  <div class="section">
    <div class="title">Drawer</div>
    <div class="content">
      <p><strong>Neo-drawer</strong> is a closable sidebar with overlay in background. It let you put items with actions or redirections on other pages.</p>

      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively the drawer component in your template:</p>

          <DocExample :code-snippets="[{lang: 'js', code: codeBasicJS}, {lang: 'html', code: codeBasic}]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-drawer title="My drawer" key="example" :items="items" background-color="#e7e1e1" />
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
import { defaultProps } from '@/views/docs/constants';
import DocExample from '@/components/doc-example.vue';


const codeBasic = `<neo-drawer title="My drawer" :items="items" />`

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

const codeSlotActivator = `<neo-dialog>
  <template v-slot:activator="{ show, open }">
    <neo-button label="Show dialog" @click="open()" />
  </template>

  Dialog content
</neo-dialog>`


const props = [
  { name: "title", type: ["String"], required: false, default: 'Drawer', description: "Drawer default header title" },
  { name: "items", type: ["[Object]"], required: false, default: '[]', description: "Drawer items list ({label: string, to?: string, category?: string, onClick?: () => void})" },
  { name: "persistant", type: ["Boolean"], required: false, default: false, description: "Make disappears drawer on ESC press or click outside of it" },
  { name: "position", type: ["String"], required: false, default: 'left', description: "Drawer position (left or right)" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Drawer content" },
  { name: "activator", props: ["show (Boolean)", "open (Function)"], description: "Zone which will make appears drawer (neo-button by default)" },
]
</script>

<style scoped>
  .section {
    max-width: 100%;
  }
</style>
