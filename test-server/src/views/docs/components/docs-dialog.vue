<template>
  <div class="section">
    <div class="title">Dialog</div>
    <div class="content">
      <p><strong>Neo-dialog</strong> allow you to make appears a dialog with an activator, which is button by default.
      </p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively the dialog component in your template:</p>
          <DocExample :code-snippets="[{lang: 'html', code: codeBasic}]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-dialog rounded>
                <div class="d-flex flex-column justify-start pa-7">
                  <neo-profile img="../../profile.png" width="50px" height="50px" rounded="circle"  class="mb-10" />
                  <div class="d-flex justify-around flex-wrap">
                    <neo-textfield label="Firstname" modelValue="Doe" class="px-2" />
                    <neo-textfield label="Lastname" modelValue="John" class="px-2" />
                  </div>
                  <neo-textfield label="Email" modelValue="foo@bar.io" class="px-2 py-5" />
                  <neo-button class="ma-2" backgroundColor="black" color="white">Submit form</neo-button>
                </div>
              </neo-dialog>

              <neo-dialog rounded persistant>
                <template v-slot:activator="{ show, open }">
                  <neo-button label="Persistant dialog" @click="open()" />
                </template>

                Persistant dialog content ...
              </neo-dialog>
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Advanced</div>
        <div class="content">
          <p>You can define yourself how activate the dialog by customize first action with the <code>activator</code>
            slot. Here is an example of using it :</p>

          <DocExample :code-snippets="[{lang: 'html', code: codeSlotActivator}]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-dialog>
                <template v-slot:activator="{ show, open }">
                  <neo-button label="Show dialog" @click="open()" />
                </template>

                Dialog content
              </neo-dialog>
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your dialog:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your dialog:</p>
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
import DocExample from '@/components/doc-example.vue';


const codeBasic = `<neo-dialog class="mx-3" rounded persistant>
  Dialog content
</neo-dialog>`;

const codeSlotActivator = `<neo-dialog>
  <template v-slot:activator="{ show, open }">
    <neo-button label="Show dialog" @click="open()" />
  </template>

  Dialog content
</neo-dialog>`;


const props = [
  { name: 'v-model', type: ['Boolean'], required: false, default: false, description: 'Dialog content show status' },
  { name: 'title', type: ['String'], required: false, default: 'Dialog', description: 'Dialog default header title' },
  {
    name: 'persistant',
    type: ['Boolean'],
    required: false,
    default: false,
    description: 'Make disappears dialog on ESC press or click outside of it',
  },
];

const slots = [
  { name: 'default', props: [], description: 'Dialog content' },
  {
    name: 'activator',
    props: ['show (Boolean)', 'open (Function)'],
    description: 'Zone which will make appears dialog (neo-button by default)',
  },
];
</script>

<style>

</style>
