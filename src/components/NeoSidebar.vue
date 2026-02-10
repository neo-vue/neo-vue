<template>
  <div class="neo-sidebar" :class="classes" :style="[
    style,
    { '--neo-sidebar-category-color': categoryColor },
    { '--neo-sidebar-item-hover-background-color': itemHoverBackgroundColor },
    { '--neo-sidebar-item-color': itemColor }
  ]">
    <div class="neo-sidebar__header">
      <slot name="header">
        <div class="neo-sidebar__header__title">{{ title }}</div>
      </slot>
    </div>
    <div class="neo-sidebar__content">
      <slot name="content" :items="items">
        <template v-if="categories">
          <div v-for="(category, index) in categories" :key="index" class="neo-sidebar__category">
            <div class="neo-sidebar__category__header" v-if="category !== 'default'">
              <div class="neo-sidebar__category__header__title">{{ category }}</div>
            </div>
            <div class="neo-sidebar__category__items ml-10">
              <span v-for="(item, index) in itemsByCategory(category)" :key="index"
                    class="neo-sidebar__category__items__item" :class="{'active' : isActive(item)}" @click="goTo(item)">
                <span>{{ item.label }}</span>
              </span>
            </div>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from 'utils/GenericProps';

const defaultProps = generateDefaultsProps({ height: '100%', width: '20%' });
</script>

<script setup lang="ts">
import {
  computed,
  defineProps,
  getCurrentInstance,
  inject,
  onBeforeMount,
  onMounted,
  type PropType,
  Ref,
  ref, watch,
} from 'vue';
import { darkedColor } from '../utils/ComponentUtils';
import { generateDefaultsComputed, generateStylesFromProps } from '../utils/GenericComputed';
import { NeoTheme } from '../types';

type SidebarItem = { label: string, to?: string, category?: string, onClick?: () => void }

const props = defineProps({
  ...defaultProps,
  title: {
    type: String,
    default: 'Sidebar',
  },
  items: {
    type: Object as PropType<SidebarItem[]>,
    default: () => [],
  },
});

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const classes = ref('');
const categories = ref([...new Set(props.items.map(i => i.category || 'default'))]);
const router = ref((getCurrentInstance()?.proxy as any).$router);
const categoryColor = darkedColor(props.backgroundColor, 50) || props.color;
const itemHoverBackgroundColor = ref(darkedColor(props.backgroundColor, 5) || props.backgroundColor);
const itemColor = ref(props.color);
const itemSelectedIndex = ref(-1);

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

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });
}

onMounted(() => {
  //define selected index if possible
  props.items.forEach((item, index) => {
    if (item.to) {
      if (isVueRouterInstalled.value) {
        if (router.value.currentRoute.path === item.to) {
          itemSelectedIndex.value = index;
        }
      } else {
        if (window.location.pathname === item.to) {
          itemSelectedIndex.value = index;
        }
      }
    }
  });
});

const isVueRouterInstalled = computed(() => {
  return !!router.value;
});

function itemsByCategory(category: string) {
  return category === 'default'
    ? props.items.filter(i => !i.category)
    : props.items?.filter(i => i.category && i.category === category);
}

function goTo(item: SidebarItem) {
  if (item.to) {
    if (isVueRouterInstalled) {
      router.value.push(item.to);
    } else {
      window.location.href = item.to;
    }
  } else if (item.onClick) {
    item.onClick();
  }

  itemSelectedIndex.value = props.items.indexOf(item);
}

function isActive(item: SidebarItem) {
  if (itemSelectedIndex.value === -1) {
    return false;
  } else {
    return itemSelectedIndex.value === props.items.indexOf(item);
  }
}

</script>

<style scoped>

.neo-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20vw;
}

.neo-sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.neo-sidebar__content {
  display: flex;
  flex-direction: column;
  height: 85%;
  overflow-y: auto;
}

.neo-sidebar__category {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.neo-sidebar__category__header {
  padding: 10px 20px;
  color: var(--neo-sidebar-category-color);
  font-size: 0.8rem;
  font-weight: lighter;
}

.neo-sidebar__category__header__title {
  font-size: 1.2em;
}

.neo-sidebar__category__items {
  display: flex;
  flex-direction: column;
}

.neo-sidebar__category__items__item {
  margin-left: 25px;
  font-size: 1rem;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  color: var(--neo-sidebar-item-color);
}

.neo-sidebar__category__items__item a {
  text-decoration: none;
  color: var(--neo-sidebar-item-color);
}

.neo-sidebar__category__items__item:hover, .neo-sidebar__category__items__item.active {
  background-color: var(--neo-sidebar-item-hover-background-color);
}

.neo-sidebar__category__items__item.active {
  font-weight: bold;
  padding-left: 20px;
}

//.neo-sidebar__category__items__item:after {
//  content: "";
//  display: block;
//  max-width: 0;
//  height: 2px;
//  background-color: var(--neo-sidebar-item-color);
//  transition: max-width 0.2s ease-in-out;
//}
//
//.neo-sidebar__category__items__item:hover:after {
//  max-width: 100%;
//}
</style>
