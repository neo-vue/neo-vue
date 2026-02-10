<template>
  <div class="neo-tabs">
    <div class="neo-tabs__header">
      <div class="neo-tabs__header__container mb-10 d-flex" :class="headerClassPosition">
        <template v-for="option in options" :key="option.key">
          <slot name="header" :option="option">
            <div v-if="innerValue === option.key" class="neo-tabs__header__item neo-tabs__header__item--active" :class="classes" :style="activeTabStyle">
              {{option.value}}
            </div>
            <div v-else @click="changeTab(option.key)" class="neo-tabs__header__item" :style="tabStyle">
              {{option.value}}
            </div>
          </slot>
        </template>
      </div>
    </div>
    <div class="neo-tabs__content">
      <div class="neo-tabs__content__tab" v-for="option in options" :key="option.key" v-show="innerValue === option.key" :class="classes" :style="style">
        <slot :name="option.key"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({padding: "10px", width: "fit-content"});
</script>

<script setup lang="ts">
import { computed, defineProps, inject, onBeforeMount, onMounted, PropType, Ref, ref, watch } from 'vue';
import { generateDefaultsComputed, generateStylesFromProps } from '../utils/GenericComputed';
import { NeoTheme } from '../types';

type TabOptions = { key: string, value: string, default?: boolean };

//TODO : HEADER POSITION (LEFT, RIGHT, CENTER)

const props = defineProps({
  ...defaultProps,
  modelValue: {
    type: [String, Number],
    default: null
  },
  options: {
    type: Object as PropType<TabOptions[]>,
    required: true
  },
  headerPosition: {
    type: String,
    default: 'left'
  }
});

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const tabStyle = ref('');
const activeTabStyle = ref('');
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
  let backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  let color = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });

  tabStyle.value = generateStylesFromProps({
    ...props,
    backgroundColor: null,
    color,
    width: 'fit-content'
  });

  activeTabStyle.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color,
    width: 'fit-content'
  });
}

const emit = defineEmits(['update:modelValue']);

const innerValue = ref(props.modelValue ?? props.options[0].key);

watch(() => props.modelValue, (value) => {
  if(!value) return;
  if(!props.options?.find(o => o.key === value)) throw new Error(`[Neo-tabs] The value "${value}" is not a valid option`);
  innerValue.value = value;
}, {immediate: true});

const headerClassPosition = computed(() => {
  switch(props.headerPosition) {
    case 'left': return 'justify-start';
    case 'center': return 'justify-center';
    case 'right': return 'justify-end';
    default: return 'justify-start';
  }
})

function changeTab(key: string) {
  innerValue.value = key;
  emit('update:modelValue', key);
}
</script>

<style scoped>
.neo-tabs__header__container {
  display: flex;
}

.neo-tabs__header__item {
  padding: 10px;
  cursor: pointer;
}

.neo-tabs__content__tab {
  width: 100%;
}
</style>
