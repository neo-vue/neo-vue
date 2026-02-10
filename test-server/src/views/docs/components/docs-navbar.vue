<template>
  <div class="section">
    <div class="title">Navbar</div>
    <div class="content">
      <p><strong>Neo-navbar</strong> let you create a responsive navbar, transparent by default. Items generating <code>router-link</code> components when <code>vue-router</code> is used, and <code>a</code> tag if not.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively this component in your template :</p>
          <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
            <neo-navbar title="Neo-vue" :items="items" padding="10px" backgroundColor="#cecece" border shadow rounded>
              <neo-navbar-item to="/docs/components/button">Buttons</neo-navbar-item>
              <neo-navbar-item to="/docs/components/checkbox">Checkbox</neo-navbar-item>
              <neo-navbar-item to="/docs/components/radio">Radio</neo-navbar-item>
            </neo-navbar>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Advanced</div>
        <div class="content">
          <p>You can define yourself position of items by defining them in each navbar item. Here is an example of using it :</p>
          <DocExample :code-snippets="[{code: advancedJS, lang: 'js'}, {code: advancedTemplate, lang: 'html'}]">
            <neo-navbar title="Neo-vue" backgroundColor="#cecece" :items="items" border shadow rounded padding="10px"/>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your navbar:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your navbar:</p>
          <DocSlotsTable :items="slots" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DocPropsTable from '../../../components/doc-props-table.vue';
import DocSlotsTable from '../../../components/doc-slots-table.vue';
import { defaultProps } from '@/views/docs/constants';
import DocExample from '@/components/doc-example.vue';

const basic = `<neo-navbar title="Neo-vue" padding="10px" backgroundColor="#cecece" border shadow rounded>
  <neo-navbar-item to="/docs/components/button">Buttons</neo-navbar-item>
  <neo-navbar-item to="/docs/components/checkbox">Checkbox</neo-navbar-item>
  <neo-navbar-item to="/docs/components/radio">Radio</neo-navbar-item>
</neo-navbar>`

const advancedJS = `const items = [
  { label: "Home", to: "/home", position: "left" },
  { label: "About", to: "/about", position: "left" },
  { label: "Contact", to: "/contact", position: "right" }
];`

const advancedTemplate = `<neo-navbar title="Neo-vue" backgroundColor="#cecece" :items="items" border shadow rounded padding="10px"/>`

const items = [
  { label: "Home", to: "/home", position: "left" },
  { label: "About", to: "/about", position: "left" },
  { label: "Contact", to: "/contact", position: "right" }
];

const props = [
  { name: "title", type: ["String"], required: false, default: '', description: "Navbar default header title" },
  { name: "icon", type: ["String"], required: false, default: '', description: "Navbar default header icon url" },
  { name: "items", type: ["{ label: string, to: string, position: string, color?: string }[]"], required: false, default: '[]', description: "Navbar items" },
  { name: "fixed", type: ["Boolean"], required: false, default: false, description: "Navbar fixed position" },
  ...defaultProps
]

const slots = [
  { name: "icon", props: [], description: "Navbar icon" },
  { name: "title", props: [], description: "Navbar title" },
  { name: "left-items", props: [], description: "Navbar left items (after title)" },
  { name: "right-items", props: [], description: "Navbar right items (before end of navbar)" },
  { name: "items-mobile", props: [], description: "Navbar mobile drawer content" },
]

</script>

<style>

</style>
