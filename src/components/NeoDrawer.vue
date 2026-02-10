<template>
  <span class="neo-drawer" ref="$el">
    <slot name="activator" :show="showDrawer" :open="openDrawer">
      <NeoButton @click="showDrawer = !showDrawer" label="Open Drawer" />
    </slot>

    <div class="overlay" v-show="showDrawer">
      <div class="overlay__background" ref="background"></div>
      <div class="overlay__content">
        <slot>
          <NeoSidebar v-show="propsRef" v-bind="props" />
        </slot>
      </div>
    </div>
  </span>  
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps();
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, inject, onBeforeMount, onMounted, Ref, ref, watch } from 'vue';
import type { PropType } from "vue";
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import { darkedColor } from "utils/ComponentUtils";
import NeoButton from "./NeoButton.vue";
import NeoSidebar from "./NeoSidebar.vue";
import { NeoTheme } from '../types';

type DrawerItem = { label: string, color: string, category: string | 'default', to?: string, onClick?: () => void }

const props = defineProps({
  ...defaultProps,
  title: {
    type: String,
    default: "Drawer"
  },
  items: {
    type: Object as PropType<DrawerItem[]>,
    default: () => []
  },
  persistant: {
    type: Boolean,
    default: false
  },
  position: {
    type: String as PropType<"left" | "right">,
    default: "left"
  },
})

const showDrawer = ref(false);

const that = getCurrentInstance();
const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const classes = ref('');

onBeforeMount(() => {
  // Generate default styles and classes based on props
  const { style: generatedStyle, classes: generatedClasses } = generateDefaultsComputed(props);
  style.value = generatedStyle;
  classes.value = generatedClasses;
  classes.value += `neo-drawer__content--${props.position}`;
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

const propsRef = ref(null as any);

onMounted(() => {
  propsRef.value = props;
  if(!props.persistant) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        showDrawer.value = false;
      }
    });
    (that?.refs.background as any).addEventListener("click", () => {
      showDrawer.value = false;
    });
  }
})

const openDrawer = () => {
  showDrawer.value = true;
}

const closeDrawer = () => {
  showDrawer.value = false;
}

const _itemsGroupByCategory = computed(() => {
  const items = props.items;
  const categories = items.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];
  const itemsGroupByCategory = uniqueCategories.map(category => {
    return {
      category,
      items: items.filter(item => item.category === category)
    }
  })
  return itemsGroupByCategory;
})

</script>

<style scoped>
.neo-drawer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.neo-drawer .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.neo-drawer .overlay__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
}

.neo-drawer .overlay__content {
  position: absolute;
  top: 0;
  width: fit-content;
  height: 100%;
}

.neo-drawer__content--left {
  left: 0;
}

.neo-drawer__content--right {
  right: 0;
}

.neo-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.category__header {
  padding: 20px;
  font-size: 1.2rem;
  background-color: var(--color);
}

.category .category__items__item {
  margin-left: 25px;
  font-size: 1rem;
  padding: 10px;
  text-decoration: none;
}

.category .category__items__item a {
  text-decoration: none;
}

.category .category__items__item:after {
  content: "";
  display: block;
  max-width: 0;
  height: 2px;
  background-color: var(--color);
  transition: max-width 0.2s ease-in-out;
}

.category .category__items__item:hover:after {
  max-width: 100%;
}
</style>