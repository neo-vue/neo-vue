<template>
  <router-link v-if="vueRouterIsInstalled" :to="to" class="neo-nav-item" :class="{'mobile' : isMobile}"
               :style="style" ref="$el" :key="to">
    <slot name="prepend" />
    <div class="neo-nav-item__label">
      <slot>
        <span v-if="label">{{ label }}</span>
      </slot>
    </div>
    <slot name="append" />
  </router-link>
  <a v-else :href="to" class="neo-nav-item" :class="{'mobile' : isMobile}" :style="style" ref="$el">
    <slot name="prepend" />
    <div class="neo-nav-item__label">
      <slot>
        <span v-if="label">{{ label }}</span>
      </slot>
    </div>
    <slot name="append" />
  </a>

</template>

<script lang="ts">
import { generateDefaultsProps } from 'utils/GenericProps';

const defaultProps = generateDefaultsProps();
</script>

<script setup lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, onBeforeMount, onMounted, Ref, ref, watch } from 'vue';
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { getRef } from 'utils/ComponentUtils';
import { NeoTheme } from '../types';

const props = defineProps({
  ...defaultProps,
  label: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const that = getCurrentInstance();

const theme = inject('theme') as Ref<NeoTheme>;

const isActive = ref(props.active);
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

// Watch for external active prop changes
watch(() => props.active, (newActive) => {
  isActive.value = newActive;
  updateStyle();
});

function updateStyle() {
  let backgroundColor;
  let color;
  if(isActive.value) {
    backgroundColor = props.color || theme.value.schemeColors?.dark;
    // Fix: Don't use backgroundColor for text color when active
    // Use a contrasting color from theme instead
    color = theme.value.schemeColors?.light || '#ffffff';
  } else {
    backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
    color = props.color || theme.value.schemeColors?.dark;
  }

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor: backgroundColor,
    color: color
  });
}

onMounted(() => {
  if (!that) return;
  const el = getRef(that, '$el').$el || getRef(that, '$el');
  if (!el) return;
  el.style.setProperty('--color', props.color);

  if(vueRouterIsInstalled.value) {
    const currentRoute = (that?.proxy as any).$router.currentRoute._rawValue;
    if(currentRoute.matched?.find((r: any) => r.path === props.to)) {
      isActive.value = true;
    } else {
      if(el.classList.contains('router-link-active')) {
        isActive.value = true;
      }
    }
  }
});

const isMobile = computed(() => {
  return window.innerWidth <= 768;
});

const vueRouterIsInstalled = computed(() => {
  return !!(that?.proxy as any).$router;
});


//register :hover style
// (that!.refs.$el as any)
</script>

<style scoped>
.neo-nav-item {
  padding: 7px 10px;
  font-size: 1.3rem;
  transition: all 0.3s ease-in-out;
  font-weight: 400;
  text-decoration: none;
  color: var(--color);
}

.neo-nav-item:hover {
  cursor: pointer;
  padding-bottom: 3px;
  transition: all 0.1s ease-in-out;
}

.neo-nav-item:after {
  background-color: var(--color);
  content: "";
  display: block;
  max-width: 0rem;
  height: 2px;
  transition: max-width 0.2s ease-in-out;
}

.neo-nav-item:hover:after {
  max-width: 100%;
}

/* ========================================== */

@media screen and (max-width: 768px) {
  .neo-nav-item:hover {
    padding-bottom: 7px;
    transition: none;
  }
}

.neo-nav-item.mobile {
  font-size: 2rem;
  margin: 2vh 5vw;
  border-bottom: none;
}

.neo-nav-item.mobile:after {
  background-color: var(--color);
  content: "";
  display: block;
  max-width: 2rem;
  height: 3px;
  transition: max-width 0.2s ease-in-out;
}

.neo-nav-item.mobile:hover:after {
  max-width: 100%;
}

</style>
