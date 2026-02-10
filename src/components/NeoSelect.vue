<template>
  <div class="neo-select" ref="$el">
    <span v-if="label" class="label" :style="labelStyle">{{label}}</span>
    <div class="input" @click="showDropdown = !showDropdown" :class="classes" :style="style">
      <div class="value">
        {{ innerValue ? innerValue : placeholder }}
      </div>
      <div class="arrow ml-5">
        <span v-if="showDropdown">▲</span>
        <span v-else>▼</span>
      </div>
    </div>
    <div class="options" :class="_optionsClasses" v-show="showDropdown" ref="optionsList">
      <div class="option" v-for="option in options" :key="option.key" @click="itemChanged(option)" :class="_optionItemClasses" :style="optionsStyle">
        <slot name="option" :option="option">
          {{option.value}}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({padding: "10px", width: "fit-content"});
</script>

<script setup lang="ts">
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { inject, onBeforeMount, PropType, Ref } from 'vue';
import { computed, getCurrentInstance, nextTick, ref, watch } from "vue";
import { getRef } from '../utils/ComponentUtils';
import { NeoTheme } from '../types';

type SelectOptions = { key: string, value: string };

const props = defineProps({
  ...defaultProps,
  modelValue: {
    type: [String, Number],
    default: null
  },
  options: {
    type: Object as PropType<SelectOptions[]>,
    default: () => []
  },
  label: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    default: "Select ..."
  }
})

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);
const showDropdown = ref(false);

const that = getCurrentInstance();

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const labelStyle = ref('');
const optionsStyle = ref('');
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
  const labelColor = props.color || theme.value.schemeColors?.dark;
  const optionColor = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });

  labelStyle.value = "color: " + labelColor + ";";
  optionsStyle.value = "color: " + optionColor + ";";
}

const _optionsClasses = computed(() => {
  let result = '';

  if(props.rounded != null){
    switch(typeof props.rounded) {
      case "boolean":
        if(props.rounded === true) result+= "rounded ";
        break;
      case "string":
        result +="rounded-" + props.rounded + " ";
        break;
    }
  }

  if(props.shadow != null){
    switch(typeof props.shadow){
      case "boolean":
        if(props.shadow === true) result += "shadow "
        break;
      case "string":
        result += "shadow-" + props.shadow + " "
    }
  } else {
    result += "shadow "
  }

  return result;
})

const _optionItemClasses = computed(() => {
  let result = '';

  if(props.rounded != null){
    switch(typeof props.rounded) {
      case "boolean":
        if(props.rounded === true) result+= "rounded ";
        break;
      case "string":
        result +="rounded-" + props.rounded + " ";
        break;
    }
  }

  if(props.shadow != null){
    switch(typeof props.shadow){
      case "boolean":
        if(props.shadow === true) result += "shadow "
        break;
      case "string":
        result += "shadow-" + props.shadow + " "
    }
  } else {
    result += "shadow "
  }

  if(props.border != null){
    switch(typeof props.border){
      case "boolean":
        if(props.border === true) result += "border "
        break;
      case "string":
        result += "border-" + props.border + " "
    }
  } else {
    result += "border "
  }

  return result;
})

const itemChanged = (option: any) => {
  if(option.key === undefined) return;
  innerValue.value = option.value;
  showDropdown.value = false;
  emit("update:modelValue", option.key);
}

watch(showDropdown, (newValue, oldValue) => {
  if(newValue === true){
    if(!that) return;
    if(!getRef(that, 'optionsList')) return;
    if(!getRef(that, '$el')) return;
    if (showDropdown.value) {
      nextTick(() => {
        //get component height and adjust refs.optionsList position on it
        const componentHeight = getRef(that, '$el').offsetHeight;
        getRef(that, 'optionsList').style.top = componentHeight + 10 + "px";

        //get component width and adjust refs.optionsList position on it
        const componentWidth = getRef(that, '$el').offsetWidth;
        //                                                   - 3 = borderWith in CSS (3px *2 sides)
        getRef(that, 'optionsList').style.width = (componentWidth) + "px";
      });
    }
  }
})
</script>

<style scoped>
.neo-select {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.neo-select .label {
  font-weight: bold;
}

.neo-select .input {
  transition: ease 0.1s;
  display: flex;
  justify-content: space-between;
}

.neo-select .input:hover {
  cursor: pointer;
  transition: ease 0.1s;
}

.neo-select .input:focus {
  outline: none;
}

.neo-select .options {
  position: absolute;
  background-color: white;
  transition: ease 0.1s;
  overflow: hidden;
}

.neo-select .options .option {
  padding: 10px;
  box-shadow: none !important;
  cursor: pointer;
  transition: ease 0.1s;
}

.neo-select .options .option:hover {
  background-color: #f2f2f2;
  transition: ease 0.1s;
}

.neo-select .options .option:first-child {
  border-bottom: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.neo-select .options .option:last-child {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}

.neo-select .options .option:not(:first-child):not(:last-child) {
  border-bottom: 0px !important;
  border-radius: 0px !important;
}

/* .neo-select .options .option:not(:last-child) {
  border-bottom: 3px solid v-bind(color);
}

.neo-select .options .option:not(:first-child) {
  border-top: 3px solid v-bind(color);
} */

.neo-select .options.fade-in {
  opacity: 1;
  transition: opacity 0.3s ease; /* Durée et courbe d'animation */
}

</style>