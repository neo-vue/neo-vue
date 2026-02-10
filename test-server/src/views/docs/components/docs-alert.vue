<template>
  <div class="section">
    <div class="title">Alert</div>
    <div class="content">
      <p><strong>Neo-alert</strong> let you create an alert card, with a predefined colors and icons in case of success, warning, error or info.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively neo-alert in your template. Here is an example :</p>
          <DocExample :code-snippets="[{lang: 'html', code: basic}]">
            <div class="example mt-10 d-flex flex-wrap justify-around">
              <neo-alert level="info" rounded>Alert content !</neo-alert>
              <neo-alert level="warning" rounded>Alert content !</neo-alert>
              <neo-alert level="success" rounded>Alert content !</neo-alert>
              <neo-alert level="error" rounded>Alert content !</neo-alert>
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

const basic = `<neo-alert level="info">Alert content !</neo-alert>
<neo-alert level="warning">Alert content !</neo-alert>
<neo-alert level="success">Alert content !</neo-alert>
<neo-alert level="error">Alert content !</neo-alert>`

const props = [
  { name: "level", type: ["String"], required: true, default: '', description: "Alert level (conditionning icon) : info, success, warning, error" },
  { name: "icon", type: ["Boolean"], required: false, default: '', description: "Alert prepend icon" },
  { name: "title", type: ["String"], required: false, default: '', description: "Alert title" },
  ...defaultProps
]

const slots = [
  { name: "default", props: [], description: "Content of alert" },
  { name: "icon", props: [], description: "Icon of alert" },
  { name: "title", props: [], description: "Title of alert" },
]

</script>

<style>

</style>
