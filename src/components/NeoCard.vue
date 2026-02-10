<template>
  <div class="neo-card" :class="classes" :style="style">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({padding: "10px"});
</script>

<script setup lang="ts">
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { inject, onBeforeMount, Ref, ref, watch } from 'vue';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps
});

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
.neo-card {
  display: flex;
  flex-direction: column;
}

.neo-card:hover {
  transition: ease 0.1s;
}
</style>