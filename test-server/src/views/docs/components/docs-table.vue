<template>
  <div class="section">
    <div class="title">Table</div>
    <div class="content">
      <p><strong>Neo-table</strong> let you create an HTML table with custom header, body and footer. Bring headers, items, and voila.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively neo-table in your template. Here is an example :</p>
          <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
            <div class="example mt-10">
              <neo-table border width="inherit"
                :headers="[{title: 'First name', key: 'firstname'}, {title: 'Last name', key: 'lastname'}]"
                :items="[{firstname: 'John', lastname: 'Doe'}, {firstname: 'Foo', lastname: 'Bar'}]"
              />
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Advanced</div>
        <div class="content">
          <p>You can define different slots to customize columns values rendering. For example, make text bold on <code>firstname</code> column :</p>
          <DocExample :code-snippets="[{code: advanced, lang: 'html'}]">
            <div class="example mt-10">
              <neo-table border width="inherit"
                :headers="[{title: 'First name', key: 'firstname'}, {title: 'Last name', key: 'lastname'}]"
                :items="[{firstname: 'John', lastname: 'Doe'}, {firstname: 'Foo', lastname: 'Bar'}]"
              >
                <template #firstname="{ item }">
                  <strong>{{ item.firstname }}</strong>
                </template>
              </neo-table>
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your card:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your card:</p>
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

const basic = `<neo-table border
    :headers="[{title: 'First name', key: 'firstname'}, {title: 'Last name', key: 'lastname'}]"
    :items="[{firstname: 'John', lastname: 'Doe'}, {firstname: 'Foo', lastname: 'Bar'}]"
/>`

const advanced = `<neo-table
  :headers="[{title: 'First name', key: 'firstname'}, {title: 'Last name', key: 'lastname'}]"
  :items="[{firstname: 'John', lastname: 'Doe'}, {firstname: 'Foo', lastname: 'Bar'}]"
>
  <template #firstname="{ item }">
    <strong>{{ item.firstname }}</strong>
  </template>
</neo-table>`

const props = [
  { name: "headers", type: ["{title: string, key: string}"], required: true, default: '', description: "Table headers" },
  { name: "items", type: ["Array"], required: true, default: '', description: "Table items" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Body of the table" },
  { name: "empty", props: [], description: "Body of the table when there is no items" },
  { name: "header", props: [], description: "Header of the table" },
  { name: "footer", props: [], description: "Footer of the table" }
]

</script>

<style>

</style>
