<template>
    <div class="section" v-if="isMobile">
      <div class="title">Available components</div>
      <div class="content">
        <neo-dropdown title="Commons" width="100%" background-color="#d9d4d4">
          <div class="d-flex flex-wrap gap-10 justify-start pa-2">
            <neo-button to="/docs/components/button" rounded shadow="none">Buttons</neo-button>
            <neo-button to="/docs/components/card" rounded shadow="none">Card</neo-button>
            <neo-button to="/docs/components/profile" rounded shadow="none">Profile</neo-button>
            <neo-button to="/docs/components/table" rounded shadow="none">Table</neo-button>
            <neo-button to="/docs/components/alert" rounded shadow="none">Alert</neo-button>
            <neo-button to="/docs/components/tabs" rounded shadow="none">Tabs</neo-button>
            <neo-button to="/docs/components/badge" rounded shadow="none">Badge</neo-button>
            <neo-button to="/docs/components/dialog" rounded shadow="none">Dialog</neo-button>
            <neo-button to="/docs/components/dropdown" rounded shadow="none">Dropdown</neo-button>
          </div>
        </neo-dropdown>

        <neo-dropdown title="Forms" width="100%" background-color="#d9d4d4">

          <div class="d-flex flex-wrap gap-10 justify-start pa-2">
            <neo-button to="/docs/components/button" rounded shadow="none">Textfield</neo-button>
            <neo-button to="/docs/components/checkbox" rounded shadow="none">Checkbox</neo-button>
            <neo-button to="/docs/components/radio" rounded shadow="none">Radio</neo-button>
            <neo-button to="/docs/components/select" rounded shadow="none">Select</neo-button>
            <neo-button to="/docs/components/step" rounded shadow="none">Step</neo-button>
<!--            <neo-button to="/docs/components/button" rounded shadow="none">Datepicker</neo-button>-->
          </div>
        </neo-dropdown>

        <neo-dropdown title="Navigation" width="100%" background-color="#d9d4d4" class="mb-10">

          <div class="d-flex flex-wrap gap-10 justify-start pa-2">
            <neo-button to="/docs/components/navbar" rounded shadow="none">Navbar</neo-button>
            <neo-button to="/docs/components/drawer" rounded shadow="none">Drawer</neo-button>
            <neo-button to="/docs/components/sidebar" rounded shadow="none">Sidebar</neo-button>
<!--            <neo-button to="/docs/components/pagination" rounded shadow="none">Pagination</neo-button>-->
          </div>
        </neo-dropdown>

        <!-- <li>
          <router-link to="/docs/components/switch">Switch</router-link>
        </li>
        <li>
          <router-link to="/docs/components/textarea">Textarea</router-link>
        </li> -->
      </div>
    </div>

    <div class="section">
      <div class="title">Global specifications</div>
      <div class="content">
        <p>All components of <strong>Neo Vue</strong> have commons props and classes. Some of them can be overrided on props default value, in it case they're precized with others components props on documentation.
          <br>You can also use generated classes by specifying their names in associated props, like <code>shadow="high"</code> for example.
        </p>
      </div>

      <div class="subsection">
        <div class="title">Global computed properties</div>
        <div class="content">
          <p>When neo-vue is installed, it provide to all components following computed properties :</p>
          <neo-table :headers="globalComputedHeaders" :items="globalComputed" background-color="transparent" width="100%">
            <template #name="{ item }">
              <code>{{item.name}}</code>
            </template>
          </neo-table>
        </div>
      </div>

      <div class="subsection">
        <div class="title">Global props</div>
        <div class="content">
          <docPropsTable :items="defaultProps" />
        </div>
      </div>

      <div class="subsection">
        <div class="title">Global classes</div>
        <div class="content">
          <p>Neo-vue provide you some usefull classes to manage elements position with flex, padding, or margin. It also give you classes to style border, shadow, or rounding of elements.</p>

          <neo-table :items="globalClasses" :headers="globalClassesHeaders" background-color="transparent" width="100%">
            <template #name="{ item }">
              <code>{{item.name}}</code>
            </template>

            <template #values="{ item }">
              {{item.values.join(', ')}}
            </template>
          </neo-table>

<!--          <h4 class="mt-50">Border</h4>-->
<!--          <p>All components have a border props, which allow you to customize aspect of it. Here are examples of border variations : </p>-->
<!--          <div class="d-flex justify-around">-->
<!--            <neo-button border="lite">Lite border</neo-button>-->
<!--            <neo-button>Default border</neo-button>-->
<!--            <neo-button border="bold">Bold border</neo-button>-->
<!--            <neo-button border="none">No border</neo-button>-->
<!--          </div>-->

<!--          <h4 class="mt-50">Rounding</h4>-->
<!--          <p>All components have a rounded props, which allow you to customize aspect of it. Here are examples of rounding variations : </p>-->
<!--          <div class="d-flex justify-around">-->
<!--            <neo-button rounded="none">No rounding</neo-button>-->
<!--            <neo-button rounded="lite">Small rounding</neo-button>-->
<!--            <neo-button rounded="high">High rounding</neo-button>-->
<!--            <neo-button rounded="circle">Circle rounding</neo-button>-->
<!--          </div>-->

<!--          <h4 class="mt-50">Shadow</h4>-->
<!--          <p>All components have a shadow props, which allow you to customize aspect of it. Here are examples of shadow variations : </p>-->
<!--          <div class="d-flex justify-around">-->
<!--            <neo-button shadow="none">No shadow</neo-button>-->
<!--            <neo-button shadow="lite">Lite shadow</neo-button>-->
<!--            <neo-button shadow="bold">Bold shadow</neo-button>-->
<!--          </div>-->

<!--          <h4 class="mt-50">Flex</h4>-->
<!--          <p>Flex classes are used to manage elements position with flexbox. You can use them by adding <code>d-flex</code> class-->
<!--            to parent element, and <code>flex-[1-99]</code> class to children elements.</p>-->
<!--          <p>You can also use <code>flex-row</code> or <code>flex-column</code> to manage flex direction.<br>-->
<!--            Then, Neo-vue provides you classes to adjust position of flex, horizon horizontaly or verticaly. You can use-->
<!--            <code>justify-[start, end, center, between, around]</code>, or-->
<!--            <code>align-[start, end, center, baseline, stretch]</code> classes.-->
<!--          </p>-->

<!--          <h4 class="mt-50">Padding, Margin</h4>-->
<!--          <p>Padding and margin classes are used to manage elements padding and margin. You can use them by specifying direction before size, like <code>pt-10</code> for padding-top of 10px for example, or <code>ml-5</code> for margin-left of 5px.<br>-->
<!--            Finally, you can apply global padding or margin by using <code>pa-[size]</code> or <code>ma-[size]</code> classes.-->
<!--          </p>-->
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import docPropsTable from '@/components/doc-props-table.vue';
import { onMounted, ref } from 'vue';
import { defaultProps } from './constants';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
});

const globalClassesHeaders = [
  {title: 'Name', 'key': 'name'},
  {title: 'Description', 'key': 'values'},
];
const globalClasses = [
  { name: 'border', values: ['border-none', 'border-lite', 'border-normal', 'border-bold'] },
  { name: 'rounded', values: [ 'rounded-none', 'rounded-lite', 'rounded-high', 'rounded-circle'] },
  { name: 'shadow', values: [ 'shadow-none', 'shadow-lite', 'shadow-bold'] },
  { name: 'flex', values: [ 'd-flex', 'flex-row', 'flex-column', 'flex-1', 'flex-2', 'flex-3'] },
  { name: 'justify', values: ['start', 'end', 'center', 'between', 'around'] },
  { name: 'align', values: ['start', 'end', 'center', 'baseline', 'stretch'] },
  { name: 'padding', values: ['pa-5', 'pl-5', 'pr-5', 'pt-5', 'pb-5', 'px-5', 'py-5'] },
  { name: 'margin', values: ['ma-5', 'ml-5', 'mr-5', 'mt-5', 'mb-5', 'mx-5', 'my-5'] },
  { name: 'width', values: ['w-100', 'w-50', 'w-25', 'w-75', 'w-full', 'w-fit-content'] },
  { name: 'height', values: ['h-100', 'h-50', 'h-25', 'h-75', 'h-full', 'h-fit-content'] },
]

const globalComputedHeaders = [
  {title: 'Name', 'key': 'name'},
  {title: 'Description', 'key': 'description'},
]

const globalComputed = [
  { name: 'isMobile', description: 'Return true if screen width is less than 768px' },
  { name: 'isTablet', description: 'Return true if screen width is greater than 768px and less than 1024px' },
  { name: 'isDesktop', description: 'Return true if screen width is greater than 1024px' },
];
</script>

<style>

</style>
