<template>
      <div class="section">
        <div class="title">Dropdown</div>
        <div class="content">
          <p>Dropdown component let you show by a click additional content into it, to create interactive interfaces.</p>
          <div class="subsection">
            <div class="title">Basic</div>
            <div class="content">
              <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
                <div class="d-flex flex-wrap justify-center mt-5 gap-15">
                  <neo-dropdown rounded>Dropdown content here!</neo-dropdown>
                </div>
              </DocExample>
            </div>
          </div>

          <div class="subsection">
            <div class="title">Advanced</div>
            <div class="content">
              <p>You can use custom header and handle open or close functions with `header` slot. Here is an example, with custom buttons on header :</p>

              <DocExample :code-snippets="[{code: codeSlotHeader, lang: 'html'}]">
                <div class="d-flex flex-wrap justify-center mt-5 gap-15">
                  <neo-dropdown rounded="high">
                    <template v-slot:header="{ open, close }">
                      <div class="d-flex justify-around w-full pa-5">
                        <neo-button rounded class="mx-2" label="Open" @click="open" />
                        <neo-button rounded class="mx-2" label="Close" @click="close" />
                      </div>
                    </template>
                    Dropdown content here!
                  </neo-dropdown>
                </div>
              </DocExample>
            </div>
          </div>

          <div class="subsection">
            <div class="title">Props</div>
            <div class="content">
              <p>You can use the following props to customize your dropdown:</p>
              <DocPropsTable :items="props" />
            </div>
          </div>

          <div class="subsection">
            <div class="title">Slots</div>
            <div class="content">
              <p>You can use the following slots to customize your dropdown:</p>
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

const basic = `<neo-dropdown rounded>Dropdown content here!</neo-dropdown>`;
const codeSlotHeader = `<neo-dropdown rounded="high">
  <template v-slot:header="{ open, close }">
    <div class="d-flex justify-around w-full pa-5">
      <neo-button rounded class="mx-2" label="Open" @click="open" />
      <neo-button rounded class="mx-2" label="Close" @click="close" />
    </div>
  </template>
  Dropdown content here!
</neo-dropdown>`;

const props = [
  { name: "title", type: ["String"], default: "Dropdown", required: false, description: "Dropdown header title" },
  { name: "contentBackground", type: ["String"], default: "transparent", required: false, description: "Inner dropdown content background" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Dropdown content slot" },
  { name: "header", props: ["open(Function), close(Function)"], description: "Dropdown header slot" },
  { name: "icon", props: [], description: "Dropdown header icon slot" }
]

</script>

<style>

</style>
