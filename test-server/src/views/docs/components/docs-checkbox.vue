<template>
      <div class="section">
        <div class="title">Checkbox</div>
        <div class="content">
          <p><strong>Neo-checkbox</strong> allow you to make appears a checkbox.</p>
          <div class="subsection">
            <div class="title">Basic</div>
            <div class="content">
              <p>You can use natively the checkbox component in your template:</p>

              <DocExample :code-snippets="[{ code: codeBasic, lang: 'html' }]">
                <div class="d-flex flex-wrap justify-center mt-5 gap-15">
                  <neo-checkbox>Checkbox</neo-checkbox>
                </div>
              </DocExample>
            </div>
          </div>

          <div class="subsection">
            <div class="title">Props</div>
            <div class="content">
              <p>You can use the following props to customize your checkbox:</p>
              <DocPropsTable :items="props" />
            </div>
          </div>

          <div class="subsection">
            <div class="title">Slots</div>
            <div class="content">
              <p>You can use the following slots to customize your checkbox:</p>
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

const codeBasic = `<neo-checkbox v-model="checked">Checkbox</neo-checkbox>`

const props = [
  { name: "label", type: ["String"], required: false, default: '', description: "Checkbox label" },
  { name: "v-model", type: ["Boolean"], required: false, default: false, description: "Checkbox value" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Checkbox label" },
  { name: "check", props: [], description: "Checkbox activator" },
]
</script>

<style>

</style>
