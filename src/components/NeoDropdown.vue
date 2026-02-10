<template>
  <div class="neo-dropdown" :class="classes" :style="_style">
    <div class="neo-dropdown__header" ref="header" :style="headerStyle" @click="openOrClose">
      <slot name="header" :open="open" :close="close">
        <div class="neo-dropdown__header__title">{{title}}</div>
        <div class="neo-dropdown__header__icon"> <!-- @click.self=only parent component, not child button click -->
          <slot name="icon" :show="show">
            <span v-if="show">▲</span>
            <span v-else>▼</span>
          </slot>
        </div>
      </slot>
    </div>
    <div class="neo-dropdown__content" ref="content" :class="{'show' : show}" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({
  width: 'fit-content',
  padding: '10px'
});
</script>

<script setup lang="ts">
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { useSlots, computed, getCurrentInstance, ref, watch, onMounted, inject, Ref, onBeforeMount } from 'vue';
import { darkedColor, getRef } from 'utils/ComponentUtils';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps,
  title: {
    type: String,
    default: "Dropdown"
  },
  contentBackground: {
    type: String,
    default: "transparent"
  },
})

const show = ref(false)
const that = getCurrentInstance();
const minHeaderWidth = ref(0);

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const headerStyle = ref('');
const contentStyle = ref('');
const classes = ref('');

onBeforeMount(() => {
  // Generate default styles and classes based on props
  const { style: generatedStyle, classes: generatedClasses } = generateDefaultsComputed(props);
  style.value = generatedStyle;
  classes.value = generatedClasses;
});

onMounted(() => {
  if(that) {
    minHeaderWidth.value = getRef(that, 'content').scrollWidth + 10; // Add some padding
    updateStyles();
  }
})

watch(theme, (newTheme) => {
  if(!newTheme) return;
  updateStyles();
}, { deep: true, immediate: true });

function updateStyles() {
  const backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  const color = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });

  headerStyle.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  }).replace("width: " + props.width + ";", "");
  if(props.width === defaultProps.width.default && minHeaderWidth.value) {
    return headerStyle.value += `min-width: ${minHeaderWidth.value}px;`;
  }

  contentStyle.value = generateStylesFromProps({
    backgroundColor: props.contentBackground || theme.value.schemeColors?.light,
    color
  });
}

const open = () => {
  show.value = true;
}

const close = () => {
  show.value = false;
}

function openOrClose() {
  if(that?.slots?.header) {
    // If the header slot is used, we don't toggle the dropdown
    return;
  }
  show.value = !show.value;
}

const _style = computed(() => {
  return style.value
    .replace("padding: " + props.padding + " !important;", "padding: 0px;")
    .replace("background-color: " + props.backgroundColor + ";", "background-color: transparent;");
})

watch(show, (newValue) => {
  if(!that) return;
  const content = getRef(that, 'content');
  if(newValue) {
    const padding = props.padding ?? "10px";
    content.style.maxHeight = `calc(${content.scrollHeight}px + calc(${padding} * 4))`;
    content.style.padding = `${padding}`;
    content.style.borderTop = `3px solid ${props.color}`;
  } else {
    content.style.maxHeight = "0px";
    content.style.padding = "0px";
    content.style.borderTop = "none";

    // getRef(that, 'content').style.padding = "0px !important;";
  }
})
</script>

<style scoped>
.neo-dropdown {
  cursor: pointer;
  overflow: hidden;
}

.neo-dropdown:hover {
  transition: ease 0.1s;
}

.neo-dropdown__header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


.neo-dropdown__header__title {
  font-size: 1.2rem;
  font-weight: bold;
}

.neo-dropdown__content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out, padding 0.2s ease-in-out, border-top 0.2s ease-in-out;
}
</style>
