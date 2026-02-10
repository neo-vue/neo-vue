<template>
  <a class="neo-btn" :style="style" :class="classes" :href="to" @click="handleClick">
    <slot name="prepend"></slot>
    <slot>{{label}}</slot>
    <slot name="append"></slot>
  </a>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({padding: "10px"});
</script>

<script setup lang="ts">
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { computed, inject, onBeforeMount, reactive, ref, Ref, toRef, watch } from 'vue';
import { darkedColor } from '../utils/ComponentUtils';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps,
  label: {
    type: String,
    required: false
  },
  to: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['click']);

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
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

watch(() => props.disabled, (newValue) => {
  const backgroundColor = newValue ? darkedColor(props.backgroundColor, 0.2) : props.backgroundColor;
  style.value = generateStylesFromProps({...props, backgroundColor});
}, { immediate: true });


function updateStyle() {
  const backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  const color = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });
}

function handleClick() {
  if (props.disabled) {
    return;
  }

  if (props.to) {
    window.location.href = props.to;
  } else {
    // If no 'to' prop is provided, we can emit a click event or handle it as needed
    emit('click');
  }
}

</script>

<style scoped>
.neo-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.1s;
  cursor: pointer;
  text-decoration: none;
}
</style>
