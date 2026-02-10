<template>
  <div class="section">
    <div class="title">Profile</div>
    <div class="content">
      <p><strong>Neo-badge</strong> let you create a little circle with a profile picture insode it. You can also provide initials if you don't have a profile picture.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively neo-alert in your template. Here is an example :</p>
          <DocExample :code-snippets="[{lang: 'html', code: basic}]">
            <div class="example mt-10 d-flex flex-wrap align-start justify-around">
              <neo-profile img="../../profile.png" />
              <neo-profile initials="JD" />
            </div>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your profile component:</p>
          <DocPropsTable :items="props" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Slots</div>
        <div class="content">
          <p>You can use the following slots to customize your component:</p>
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

const basic = `<neo-profile img="../../profile.png" />
<neo-profile initials="JD" />`

const props = [
  { name: "img", type: ["String"], required: false, default: '', description: "Profile picture source" },
  { name: "initials", type: ["Boolean"], required: false, default: '', description: "Initials to display" },
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
