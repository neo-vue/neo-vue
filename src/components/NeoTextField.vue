<template>
  <div class="neo-text-field">
    <label v-if="label" :for="formattedLabel" :style="labelStyle">{{ label }}</label>
    <input
      :type="type"
      v-model="innerValue"
      :id="formattedLabel"
      :placeholder="placeholder"
      :class="classes"
      :style="style"
    />
  </div>
</template>

<script lang="ts">
import { computed, inject, Ref, ref, watch, reactive, onMounted, onBeforeMount, defineComponent } from 'vue';
import { NeoTheme } from '../types';
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { generateDefaultsProps } from '../utils/GenericProps';

const defaultProps = generateDefaultsProps({ padding: "10px" });

export default defineComponent({
  name: 'NeoTextField',
  props: {
    ...defaultProps,
    modelValue: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  inject: ['theme'],
  watch: {
    'innerValue': function(newValue) {
      this.$emit('update:modelValue', newValue);
    },
    'theme': {
      handler(newTheme) {
        if (!newTheme) return;
        this.updateStyles();
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      innerValue: ref(this.modelValue),
      style: ref(''),
      labelStyle: ref(''),
      classes: ref('')
    }
  },
  created() {
    const { classes, style } = generateDefaultsComputed(this.$props);
    this.classes = classes;
    this.style = style;
    this.updateStyles();
  },
  computed: {
    formattedLabel() {
      return this.label ? this.label.toLowerCase().trim() : null;
    },
  },
  methods: {
    updateStyles() {
      const backgroundColor = this.backgroundColor || (this.theme as NeoTheme).schemeColors?.light;
      const color = this.color || (this.theme as NeoTheme).schemeColors?.dark;
      const labelColor = this.color || (this.theme as NeoTheme).schemeColors?.dark;

      this.style = generateStylesFromProps({
        ...this.$props,
        backgroundColor,
        color
      });

      this.labelStyle = "color:" + labelColor + ";";
    }
  }
});
</script>

<style scoped>
.neo-text-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
}

.neo-text-field input {
  padding: 10px;
  transition: ease 0.1s;
}

.neo-text-field input:focus {
  outline: none;
}

.neo-text-field.rounded input {
  border-radius: 10px;
}

.neo-text-field label {
  font-weight: bold;
}

.neo-text-field input::placeholder {
  font-weight: bold;
}
</style>
