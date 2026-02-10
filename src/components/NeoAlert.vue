<template>
  <div class="neo-alert">
    <NeoCard
      :color="color"
      :backgroundColor="computedBackgroundColor"
      :rounded="rounded"
      :width="width"
      :height="height"
      :padding="padding"
      :shadow="shadow"
    >
      <slot name="icon">
        <template v-if="icon">
          <span class="neo-alert__icon">
            <neo-icon v-if="level === 'info'" name='info-circle'></neo-icon>
            <neo-icon v-else-if="level === 'success'" name='check-circle'></neo-icon>
            <neo-icon v-else-if="level === 'warning'" name='error-circle'></neo-icon>
            <neo-icon v-else-if="level === 'error'" name='x-circle'></neo-icon>
          </span>
        </template>
      </slot>
      <slot name="title">
        <template v-if="title">
          <div class="neo-alert__title">{{title}}</div>
        </template>
      </slot>
      <slot name="content">
        <div class="neo-alert__content">
          <slot></slot>
        </div>
      </slot>
    </NeoCard>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({padding: "10px"});
</script>

<script setup lang="ts">
import { computed } from 'vue';
import NeoCard from "./NeoCard.vue";

const props = defineProps({
  ...defaultProps,
  title: {
    type: String,
    default: null
  },
  icon: {
    type: Boolean,
    default: true
  },
  level: {
    type: String,
    required: true
  }
})

const computedBackgroundColor = computed(() => {
  if(props.backgroundColor !== defaultProps.backgroundColor.default) {
    return props.backgroundColor;
  } else {
    if(['info', 'error', 'success', 'warning'].includes(props.level)) {
      return document.documentElement.style.getPropertyValue('--neo-' + props.level);
    } else {
      return defaultProps.backgroundColor.default;
    }
  }
})

</script>

<style scoped>
.neo-alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
}

.neo-alert__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  margin-bottom: 10px;
}

</style>