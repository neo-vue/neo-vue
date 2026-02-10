<template>
  <div class="section">
    <div class="title">Radio</div>
    <div class="content">
      <p><strong>Neo-radio</strong> allow you to make appears a radio.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively the radio component in your template:</p>
          <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
            <neo-radio>A radio field</neo-radio>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your radio:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your radio:</p>
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

const basic = `<neo-radio>A radio field</neo-radio>`

const props = [
  { name: "v-model", type: ["String"], required: false, default: null, description: "Value of radio" },
  { name: "label", type: ["String"], required: false, default: null, description: "Label of radio" },
  { name: "placeholder", type: ["String"], required: false, default: null, description: "Placeholder of radio" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Radio label" }
]

</script>

<style>

</style>
