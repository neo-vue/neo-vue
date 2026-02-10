<template>
    <div class="section">
      <div class="title">Button</div>
      <div class="content">
        <p>
          The button component is a simple component that allows you to create a button with many custom options.
        </p>

        <div class="subsection">
          <div class="title">Basic</div>
          <div class="content">
            <p>You can use natively the button component in your template:</p>

            <DocExample :code-snippets="[{lang: 'html', code: codeBasic}]">
              <div class="d-flex flex-wrap justify-center gap-15 mt-5">
                <neo-button>Button</neo-button>
                <neo-button rounded>Rounded button</neo-button>
                <neo-button rounded :shadow="false">Without shadow button</neo-button>
                <neo-button rounded border="lite">Lite border Button</neo-button>
              </div>
            </DocExample>
          </div>
        </div>

        <div class="subsection">
          <div class="title">
            Advanced
          </div>
          <div class="content">
            You can disable the button by using the <code>disabled</code> prop, or use the <code>to</code> prop to navigate to a link when the button is clicked.
            <DocExample :code-snippets="[{lang: 'html', code: `<neo-button disabled @click='alert(Hey!)'>Disabled button</neo-button>`}]">
              <div class="d-flex flex-wrap justify-center gap-15 mt-5">
                <div class="d-flex flex-column gap-20">
                  <neo-checkbox v-model="disableButton" label="Disable button" />
                  <neo-button :disabled="disableButton" @click="showAlert('Hey!')">Disabled button</neo-button>
                </div>
              </div>
            </DocExample>
          </div>
        </div>

        <div class="subsection">
          <div class="title">Props</div>
          <div class="content">
            <p>
              You can use the following props to customize your button:
            </p>
            <DocPropsTable :items="props" />
          </div>
        </div>

        <div class="subsection">
          <div class="title">Slots</div>
          <div class="content">
            <p>
              You can use the following slots to customize your button:
            </p>
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
import { ref } from 'vue';

const codeBasic = `<neo-button class="mx-3">Button</neo-button>
<neo-button class="mx-3" rounded>Rounded button</neo-button>
<neo-button class="mx-3" rounded :shadow="false">Without shadow button</neo-button>
<neo-button class="mx-3" rounded border="lite">Lite border Button</neo-button>`

const props = [
  { name: "label", type: ["String"], required: false, default: '', description: "Button label" },
  { name: "padding", type: ["String"], required: false, default: '10px', description: "Button padding" },
  { name: "to", type: ["String"], required: false, default: '', description: "Button navigation link" },
  { name: "disabled", type: ["Boolean"], required: false, default: false, description: "Disable the button" },
  ...defaultProps
]

const disableButton = ref(false);

const slots = [
  { name: "default", props: [], description: "Button content" },
  { name: "prepend", props: [], description: "Slot to prepend content" },
  { name: "append", props: [], description: "Slot to append content" }
]

function showAlert(message: string) {
  alert(message);
}
</script>

<style>

</style>
