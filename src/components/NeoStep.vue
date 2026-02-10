<template>
  <div class="neo-step" :style="containerStyle">
    <div class="neo-step__header">
      <div v-for="(step, index) in steps" :key="step.key" class="neo-step__header-item" :class="{ 'neo-step__header-item--active': currentStepIndex === index }" :style="currentStepIndex === index ? activeHeaderStyle : headerStyle">
        <slot v-if="currentStepIndex === index" name="active-header" :step="step" :index="index">
          <div class="neo-step__header-item-number" :style="activeNumberStyle">{{ index + 1 }}</div>
          <div class="neo-step__header-item-title">{{ step.title }}</div>
        </slot>
        <template v-else>
          <div class="neo-step__header-item-number">{{ index + 1 }}</div>
          <div class="neo-step__header-item-title">{{ step.title }}</div>
        </template>
      </div>
    </div>
    <neo-card :style="style">
      <div class="neo-step__content">
        <slot :name="steps[currentStepIndex].key"></slot>
      </div>
    </neo-card>
    <div v-if="!hideFooter" class="neo-step__actions">
      <slot name="footer" :previousStep="previousStep" :nextStep="nextStep" :isFirst="currentStepIndex === 0" :isLast="currentStepIndex === steps.length - 1">
        <neo-button :style="style" width="100px" :class="classes" @click="previousStep" :disabled="currentStepIndex === 0">Previous</neo-button>
        <neo-button :style="style" width="100px" :class="classes" @click="nextStep" :disabled="currentStepIndex === steps.length - 1">Next</neo-button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "../utils/GenericProps";
const defaultProps = generateDefaultsProps({ padding: "10px" });
</script>

<script setup lang="ts">
import { ref, watch, PropType, onBeforeMount } from 'vue';
import NeoButton from './NeoButton.vue';
import NeoCard from './NeoCard.vue';
import { useTheme } from '../theme';
import { generateDefaultsComputed, generateStylesFromProps } from '../utils/GenericComputed';

const props = defineProps({
  ...defaultProps,
  steps: {
    type: Array as PropType<{ key: string, title: string }[]>,
    required: true
  },
  modelValue: {
    type: String,
    default: null
  },
  hideFooter: {
    type: Boolean,
    default: false
  }
});

const { theme } = useTheme();

const style = ref('');
const classes = ref('');
const headerStyle = ref('');
const activeHeaderStyle = ref('');
const activeNumberStyle = ref('');
const containerStyle = ref('');

onBeforeMount(() => {
  const { style: generatedStyle, classes: generatedClasses } = generateDefaultsComputed(props);
  style.value = generatedStyle;
  classes.value = generatedClasses;
  updateStyle();
});

watch(theme, () => {
  updateStyle();
}, { deep: true });

function updateStyle() {
  let backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  let color = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    width: null, // width is handled by containerStyle
    backgroundColor,
    color
  });

  if (props.width) {
    containerStyle.value = `width: ${props.width};`;
  }

  headerStyle.value = generateStylesFromProps({
    ...props,
    backgroundColor: 'transparent',
    color: '#aaa'
  });

  activeHeaderStyle.value = generateStylesFromProps({
    ...props,
    backgroundColor: 'transparent',
    color
  });

  activeNumberStyle.value = `border-color: ${color};`;
}


const emit = defineEmits(['update:modelValue']);

const currentStepIndex = ref(0);

watch(() => props.modelValue, (value) => {
  if (value) {
    const index = props.steps.findIndex(step => step.key === value);
    if (index !== -1) {
      currentStepIndex.value = index;
    }
  }
}, { immediate: true });

watch(currentStepIndex, (newIndex) => {
  emit('update:modelValue', props.steps[newIndex].key);
});

function previousStep() {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
}

function nextStep() {
  if (currentStepIndex.value < props.steps.length - 1) {
    currentStepIndex.value++;
  }
}
</script>

<style scoped>
.neo-step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.neo-step__header {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: transparent;
}

.neo-step__header-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.neo-step__header-item--active {
  font-weight: bold;
}

.neo-step__header-item-number {
  border: 1px solid #eee;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neo-step__header-item--active .neo-step__header-item-number {
  border-color: currentColor;
}

.neo-step__content {
  padding: 1rem 0;
}

.neo-step__actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  .neo-step__header-item {
    flex-direction: column;
  }
}
</style>
