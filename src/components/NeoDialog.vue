<template>
  <div class="neo-dialog">
    <slot name="activator" :show="show" :open="open">
      <neo-button label="Show dialog" @click="show = !show" :rounded="rounded" />
    </slot>
    <div class="overlay" v-show="show">
      <div class="overlay__background" ref="background"></div>
      <div class="overlay__content" :class="classes" :style="style">
        <div class="neo-dialog__header" :style="headerStyle">
          <div class="neo-dialog__header__title">{{title}}</div>
          <div class="neo-dialog__header__close">
            <neo-button label="X" color="black" width="30px" height="30px" padding="0" rounded="100px" @click="close()" />
          </div>
        </div>
        <div class="neo-dialog__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps();
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, inject, onBeforeMount, onMounted, Ref, ref, watch } from 'vue';
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps,
  modelValue: {
    type: Boolean,
    default: null
  },
  title: {
    type: String,
    default: "Dialog"
  },
  persistant: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["update:modelValue"]);

let show = ref(props.modelValue);

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

onMounted(() => {
  if(!props.persistant) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        show.value = false;
      }
    });
    (that?.refs.background as any).addEventListener("click", () => {
      show.value = false;
    });
  }
})

watch(show, () => {
  emit("update:modelValue", show.value);
})

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

  headerStyle.value = 'border-bottom: 3px solid ' + color + ';';
}

const open = () => {
  show.value = true;
}

const close = () => {
  show.value = false;
}
</script>

<style>
.neo-dialog .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.neo-dialog .overlay__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
}

.neo-dialog .overlay__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
}

.neo-dialog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.neo-dialog__header__title {
  font-weight: bold;
}

.neo-dialog__header__close {
  cursor: pointer;
  display: block;
}

.neo-dialog__body {
  padding: 10px;
}

.neo-dialog.rounded {
  border-radius: 10px;
}
</style>