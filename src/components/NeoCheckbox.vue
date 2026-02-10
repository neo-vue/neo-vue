<template>
  <span class="neo-checkbox" @click="innerValue = !innerValue">
    <slot name="check" :value="innerValue">
      <span class="neo-checkbox__checkmark mr-8" :class="classes" :style="style"><span v-if="innerValue">X</span></span>
    </slot>
    <slot>
      <label for="checkbox" :style="labelStyle">{{label}}</label>
    </slot>
  </span>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({
  width: "20px", height: "20px", padding: "0px"
});
</script>

<script setup lang="ts">
import { computed, defineComponent, inject, onBeforeMount, Ref, ref, watch } from 'vue';
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps,
  modelValue: {
    type: Boolean,
    default: null
  },
  label: {
    type: String,
    default: "Select field"
  }
})

let innerValue = ref(props.modelValue);

let emits = defineEmits(["update:modelValue"])

watch(innerValue, () => {
  emits("update:modelValue", innerValue);
})

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const labelStyle = ref('');
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
  const labelColor = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color: labelColor
  });

  labelStyle.value = "color: " + labelColor + ";";
}
</script>

<style scoped>
.neo-checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.neo-checkbox:hover {
  cursor: pointer;
}

.neo-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.neo-checkbox__checkmark {
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
}

.neo-checkbox__checkmark:hover {
  transition: ease-in-out 0.1s;
}

.neo-checkbox__checkmark.rounded {
  border-radius: 50%;
}

</style>
