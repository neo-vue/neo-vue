<template>
  <div class="section">
    <div class="title">Step</div>
    <div class="content">
      <p><strong>Neo-step</strong> is a component that allows you to display a process in several steps.</p>

      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>Here is a basic example of how to use the neo-step component:</p>

          <DocExample :code-snippets="[{code: basicJS, lang: 'js'}, {code: basic, lang: 'html'}]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-step v-model="activeStep" :steps="steps" :width="isMobile ? '100%' : 'auto'">
                <template #details>
                  <div>
                    <p>Content of the first step (Details).</p>
                  </div>
                </template>
                <template #payment>
                  <div>
                    <p>Content of the second step (Payment).</p>
                  </div>
                </template>
                <template #confirmation>
                  <div>
                    <p>Content of the last step (Confirmation).</p>
                  </div>
                </template>
              </neo-step>
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize the component:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize the component:</p>
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
import { computed, ref } from 'vue';
import DocExample from '@/components/doc-example.vue';

const basic = `<neo-step v-model="activeStep" :steps="steps">
  <template #details>
    <div>
      <p>Content of the first step (Details).</p>
    </div>
  </template>
  <template #payment>
    <div>
      <p>Content of the second step (Payment).</p>
    </div>
  </template>
  <template #confirmation>
    <div>
      <p>Content of the last step (Confirmation).</p>
    </div>
  </template>
</neo-step>`;

const basicJS = `import { ref } from 'vue';

const activeStep = ref('details');

const steps = ref([
  { key: 'details', title: 'Details' },
  { key: 'payment', title: 'Payment' },
  { key: 'confirmation', title: 'Confirmation' }
]);`;

const activeStep = ref('details');
const steps = ref([
  { key: 'details', title: 'Details' },
  { key: 'payment', title: 'Payment' },
  { key: 'confirmation', title: 'Confirmation' }
]);

const isMobile = computed(() => {
  return window.innerWidth <= 768;
})

const props = [
  { name: 'modelValue', description: 'The key of the active step', type: ['String'], default: 'null', required: false },
  { name: 'steps', description: 'The list of steps to display', type: ['Array<{ key: string, title: string }'], default: 'null', required: true },
  { name: 'hideFooter', description: 'Hides the footer containing the action buttons.', type: ['Boolean'], default: 'false', required: false },
  ...defaultProps
];

const slots = [
  { name: '[key]', description: 'Dynamic slot for the content of each step. Replace [key] with the key of your step.', props: [] },
  { name: 'active-header', description: 'Slot to customize the active step header.', props: ['step: Object', 'index: Number'] },
  { name: 'footer', description: 'Slot to customize the footer actions.', props: ['previousStep: Function', 'nextStep: Function', 'isFirst: Boolean', 'isLast: Boolean'] }
];
</script>

<style scoped>
</style>
