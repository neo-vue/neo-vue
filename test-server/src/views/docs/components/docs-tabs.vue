<template>
  <div class="section">
    <div class="title">Tabs</div>
    <div class="content">
      <p><strong>Neo-tabs</strong> is a multiple tabs component to show subviews at same time.</p>

      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively neo-tabs in your template. Here is an example :</p>

          <DocExample :code-snippets="[{code: basicJS, lang: 'js'}, {code: basic, lang: 'html'}]">
            <div class="d-flex flex-wrap justify-center mt-5 gap-15">
              <neo-tabs v-model="model" :options="options">
                <template #users>
                  <neo-table
                    :headers="[{title: 'First name', key: 'firstname'}, {title: 'Last name', key: 'lastname'}]"
                    :items="[{firstname: 'John', lastname: 'Doe'}, {firstname: 'Foo', lastname: 'Bar'}]"
                  />
                </template>
                <template #products>
                  <neo-table
                    :headers="[{title: 'Name', key: 'name'}, {title: 'Price', key: 'price'}]"
                    :items="[{name: 'Pen', price: '0.80 €'}, {name: 'Pineapple', price: '1.50 €'}, {name: 'Pen-apple', price: '2.30 €'}]"
                  />
                </template>
              </neo-tabs>
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your tabs:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your tabs:</p>
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
import { ref } from 'vue';
import DocExample from '@/components/doc-example.vue';

const basic = `<neo-tabs v-model="model" :options="options">
  <template #users>
    <neo-table
      :headers="[{title: 'First name', key: 'firstname'}, {title: 'Last name', key: 'lastname'}]"
      :items="[{firstname: 'John', lastname: 'Doe'}, {firstname: 'Foo', lastname: 'Bar'}]"
    />
  </template>
  <template #products>
    <neo-table
      :headers="[{title: 'Name', key: 'name'}, {title: 'Price', key: 'price'}]"
      :items="[{name: 'Pen', price: '0.80 €'}, {name: 'Pineapple', price: '1.50 €'}, {name: 'Pen-apple', price: '2.30 €'}]"
    />
  </template>
</neo-tabs>`;

const basicJS = `const options = [
  { key: 'users', value: 'Users' },
  { key: 'products', value: 'Products' }
];`;

const model = ref('users');
const options = [
  { key: 'users', value: 'Users' },
  { key: 'products', value: 'Products' }
];

const props = [
  { name: 'modelValue', description: 'The current tab key selected', type: ['String', 'Number'], default: 'null', required: false },
  { name: 'options', description: 'The tabs options', type: ['[Object]'], default: 'null', required: true },
  { name: 'activeBackgroundColor', description: 'The active tab background color', type: ['String'], default: 'null', required: false },
  { name: 'activeColor', description: 'The active tab color', type: ['String'], default: 'null', required: false },
  { name: 'headerPosition', description: 'The header position', type: ['String'], default: 'left', required: false },
  ...defaultProps
];

const slots = [
  { name: 'header', description: 'The header slot', props: ['option: Object, show: boolean, open: () => void'] }
];
</script>

<style scoped>
</style>
