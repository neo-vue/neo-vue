<template>
  <div class="section">
    <div class="title">Badge</div>
    <div class="content">
      <p><strong>Neo-badge</strong> let you create a little card with a text inside. It can be used to display a number, a text, a status, etc.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively neo-badge in your template. Here is an example :</p>
          <DocExample :code-snippets="[{lang: 'html', code: basic}]">
            <div class="example mt-10 d-flex flex-wrap align-start justify-around">
              <neo-badge background-color="success" padding="10px">Success</neo-badge>
              <neo-badge background-color="warning" padding="10px">Warning</neo-badge>
              <neo-badge background-color="info" padding="10px">Info</neo-badge>
              <neo-badge background-color="error" padding="10px">Error</neo-badge>
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your badge:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your badge:</p>
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

const basic = `<neo-badge background-color="success" padding="10px">Success</neo-badge>
<neo-badge background-color="warning" padding="10px">Warning</neo-badge>
<neo-badge background-color="info" padding="10px">Info</neo-badge>
<neo-badge background-color="error" padding="10px">Error</neo-badge>`

const props = [
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Content of Badge" },
]

</script>

<style>

</style>
