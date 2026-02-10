<template>
  <div class="section">
    <div class="title">Card</div>
    <div class="content">
      <p><strong>Neo-card</strong> allowing you to show content. Card is a flexible container component. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <p>You can use natively neo-card in your template. Here is an example :</p>
          <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
            <neo-card padding="20px">
              <div class="d-flex justify-between align-start mb-10">
                <neo-profile img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
                <neo-button rounded="round" shadow="none" class="pa-0 ma-0">Edit profile</neo-button>
              </div>
              <div class="d-flex flex-column">
                <h3 class="ma-0">John Doe</h3>
                <p class="ma-0">My name is John doe !</p>
              </div>
            </neo-card>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Advanced</div>
        <div class="content">
          <p>You can define different slots to customize your card. For example, you can create an header or footer, check this out :</p>
          <DocExample :code-snippets="[{code: advanced, lang: 'html'}]">
            <neo-card padding="20px">
              <template #header>
                <div class="d-flex justify-between align-start mb-10">
                  <neo-profile img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
                  <neo-button rounded="round" shadow="none" class="pa-0 ma-0">Edit profile</neo-button>
                </div>
                <div class="d-flex flex-column">
                  <h3 class="ma-0">John Doe</h3>
                  <p class="ma-0">My name is John doe !</p>
                </div>
              </template>

              <div class="content border-lite my-5 pa-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
              </div>

              <template #footer>
                <div class="d-flex justify-end">
                  <neo-button rounded="round" shadow="none" class="pa-0 ma-0">See more</neo-button>
                </div>
              </template>
            </neo-card>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Props</div>
        <div class="content">
          <p>You can use the following props to customize your card:</p>
          <DocPropsTable :items="defaultProps" />
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
import DocPropsTable from '../../../components/doc-props-table.vue';
import DocSlotsTable from '../../../components/doc-slots-table.vue';
import { defaultProps } from '@/views/docs/constants';
import DocExample from '@/components/doc-example.vue';

const basic = `<neo-card padding="20px">
  <div class="d-flex justify-between">
    <neo-profile class="mb-10" img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
    <neo-button rounded="round" shadow="none">Edit profile</neo-button>
  </div>
  <div class="d-flex flex-column">
    <h3 class="ma-0">John Doe</h3>
    <p class="ma-0">My name is John doe !</p>
  </div>
</neo-card>`

const advanced = `<neo-card padding="20px">
  <template #header>
    <div class="d-flex justify-between align-start mb-10">
      <neo-profile img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
      <neo-button rounded="round" shadow="none" class="pa-0 ma-0">Edit profile</neo-button>
    </div>
    <div class="d-flex flex-column">
      <h3 class="ma-0">John Doe</h3>
      <p class="ma-0">My name is John doe !</p>
    </div>
  </template>

  <div class="content border-lite my-5 pa-5">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
      ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
      mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
  </div>

  <template #footer>
    <div class="d-flex justify-end">
      <neo-button rounded="round" shadow="none" class="pa-0 ma-0">See more</neo-button>
    </div>
  </template>
</neo-card>`

const slots = [
  { name: "default", props: [], description: "Body of the card" },
  { name: "header", props: [], description: "Header of the card" },
  { name: "footer", props: [], description: "Footer of the card" }
]

</script>

<style>

</style>
