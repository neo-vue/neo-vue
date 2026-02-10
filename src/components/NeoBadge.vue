<template>
  <span class="neo-badge" :class="classes" :style="style">
    <slot/>
  </span>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({padding: "5px", rounded: "round", shadow: false});
</script>

<script setup lang="ts">

import { generateDefaultsComputed, generateStylesFromProps } from '../utils/GenericComputed';
import { inject, onBeforeMount, ref, Ref, watch } from 'vue';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps
})

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

function updateStyle() {
  const backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  const color = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });
}
</script>

<style scoped>
.neo-badge {
  font-size: 0.7rem;
}
</style>
