<template>
  <div class="neo-table" :class="classes" :style="_style">
    <table>
      <slot name="header">
        <thead :style="headerStyle">
          <tr>
            <th v-for="header in headers" :key="header.key">{{header.title}}</th>
          </tr>
        </thead>
      </slot>
      <slot>
        <tbody :style="contentStyle">
          <tr v-if="items && items.length > 0" v-for="item in items">
            <td v-for="header in headers" :key="header.key">
              <slot :name="header.key" :item="item" :value="item[header.key]" :header="header">
                <span>{{item[header.key]}}</span>
              </slot>
            </td>
          </tr>
          <tr v-else>
            <slot name="empty">
              <td :colspan="headers.length">No data</td>
            </slot>
          </tr>
        </tbody>
      </slot>
      <tfoot>
        <slot name="footer"></slot>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({
  width: 'fit-content',
  padding: '10px',
  border: 'none',
  shadow: 'none'
});
</script>

<script setup lang="ts">
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { useSlots, computed, getCurrentInstance, ref, watch, inject, Ref, onBeforeMount } from 'vue';
import { getRef } from "utils/ComponentUtils";
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps,
  contentBackground: {
    type: String,
    default: "transparent"
  },
  headers: {
    type: Array<{title: string, key: string}>,
    required: true
  },
  items: {
    type: Array<{ [key: string]: any }>,
    required: true
  }
})

const that = getCurrentInstance();

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const headerStyle = ref('');
const classes = ref('');

onBeforeMount(() => {
  // Generate default styles and classes based on props
  const { style: generatedStyle, classes: generatedClasses } = generateDefaultsComputed(props);
  style.value = generatedStyle;
  classes.value = generatedClasses;
  updateStyle();
});

watch(theme, (newTheme) => {
  if(!newTheme) return;
  updateStyle();
}, { deep: true, immediate: true });

function updateStyle() {
  const backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  const color = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });

  headerStyle.value = "";
  if(props.padding != null) {
    headerStyle.value +="padding: " + props.padding + " !important;";
  }

  if(props.backgroundColor != null) {
    headerStyle.value +="background-color: " + props.backgroundColor + ";";
  }
}

const _style = computed(() => {
  return style.value
    .replace("padding: " + props.padding + " !important;", "padding: 0px;")
    .replace("background-color: " + props.backgroundColor + ";", "background-color: transparent;")
})

const contentStyle = computed(() => {
  let result = '';

  if(props.contentBackground != null) {
    result +="background-color: " + props.contentBackground + ";";
  }

  return result;
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  display: inline-table;
  overflow-x: auto;
  white-space: nowrap;
}
table thead tr th {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
table tbody tr td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
table tbody tr td code {
  background-color: #333;
  color: #fff;
  padding: 2px 5px;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  table {
    display: inline-block;
  }
}
</style>
