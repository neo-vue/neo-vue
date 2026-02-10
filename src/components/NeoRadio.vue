<template>
  <span class="neo-radio" @click="innerValue = !innerValue">
    <span class="input mr-4" :class="classes" :style="style"><span class="value" v-if="innerValue" :style="valueStyle"></span></span>
    <slot>
      <label :style="labelStyle">{{label}}</label>
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
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { computed, inject, onBeforeMount, Ref, ref, watch } from 'vue';
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

watch(innerValue, (newValue) => {
  emits("update:modelValue", newValue);
})


const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const labelStyle = ref('');
const valueStyle = ref('');
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
  if(innerValue.value) {
    valueStyle.value = "background-color: " + theme.value.schemeColors?.dark + ";";
  } else {
    valueStyle.value = "background-color: " + theme.value.schemeColors?.light + ";";
  }
}

</script>

<style scoped>
.neo-radio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.neo-radio:hover {
  cursor: pointer;
}

.neo-radio .input {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  transition: ease 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.neo-radio .input .value {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.neo-radio .input:hover {
  transition: ease 0.1s;
}

.neo-radio label {
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>
