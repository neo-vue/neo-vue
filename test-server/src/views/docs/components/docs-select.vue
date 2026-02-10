<template>
  <div class="section">
    <div class="title">Select</div>
    <div class="content">
      <p>
        Select component is a dropdown list with a label and a search input. It can be used to select one or multiple items.
      </p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>Select component can be used natively in your template. It <strong>must</strong> needs options, here is an example :</p>

          <DocExample :code-snippets="[{ code: basicJS, lang: 'js' }, { code: basicTemplate, lang: 'html' }]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-select v-model="value" :options="options" />
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your select:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your select:</p>
          <DocSlotsTable :items="[]" />
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

const basicJS = `const value = ref(null);
const options = [{key: "1", value: "Option 1"}, {key: "2", value: "Option 2"}, {key: "3", value: "Option 3"}];`
const basicTemplate = `<neo-select v-model="value" :options="options" />`

const value = ref(null);

const options = [{key: "1", value: "Option 1"}, {key: "2", value: "Option 2"}, {key: "3", value: "Option 3"}];

const props = [
  { name: "v-model", type: ["String"], required: false, default: null, description: "Value of select field" },
  { name: "label", type: ["String"], required: false, default: null, description: "Label of select field" },
  { name: "options", type: ["[{ key(string), value(string) }]"], required: false, default: null, description: "Options of select field" },
  { name: "placeholder", type: ["String"], required: false, default: null, description: "Placeholder of selectfield" },
  ...defaultProps
]

</script>

<style>

</style>
