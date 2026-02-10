<template>
  <div class="section">
    <div class="title">Textfield</div>
    <div class="content">
      <p></p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively this component in your template :</p>
          <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
            <div class="d-flex flex-wrap justify-center align-end mt-10">
              <neo-textfield class="mx-3" label="A label ..." placeholder="With label"></neo-textfield>
              <neo-textfield class="mx-3" placeholder="Without label"></neo-textfield>
            </div>
          </DocExample>
        </div>
      </div>
      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your textfield:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>
      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your textfield:</p>
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
import { defaultProps } from '@/views/docs/constants';
import DocExample from '@/components/doc-example.vue';

const basic = `<neo-textfield class="mx-3" label="A label ..." placeholder="With label"></neo-textfield>
<neo-textfield class="mx-3" placeholder="Without label"></neo-textfield>`

const props = [
  { name: "v-model", type: ["String"], required: false, default: null, description: "Value of textfield" },
  { name: "type", type: ["String"], required: false, default: "text", description: "Type of textfield" },
  { name: "label", type: ["String"], required: false, default: null, description: "Label of textfield" },
  { name: "placeholder", type: ['String'], required: false, default: null, description: "Placeholder of textfield" },
  ...defaultProps
]

</script>

<style>

</style>
