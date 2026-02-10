<template>
  <div class="neo-navbar" ref="$el" :class="classes" :style="style">
    <div class="neo-navbar__title">
      <slot name="icon"><span v-if="icon"><img :src="icon" alt="Neo vue icon"></span></slot>
      <slot name="title"><span v-if="title" class="title">{{title}}</span></slot>
    </div>
    <div v-if="!isMobile" class="neo-navbar__items">
      <slot>
        <div class="left-items">
          <slot name="left-items">
            <NeoNavItem v-for="(leftItem, index) in leftItems"
                        :key="index"
                        :active="leftItem.active"
                        @click="setActive(leftItem)"
                        :label="leftItem._item.label"
                        :to="leftItem._item.to"
                        :color="leftItem._item.color"
                        v-bind="props" />
          </slot>
        </div>
        <div class="right-items">
          <slot name="right-items">
            <NeoNavItem v-for="(rightItem, index) in rightItems"
                        :key="index"
                        :active="rightItem.active"
                        @click="setActive(rightItem)"
                        :label="rightItem._item.label"
                        :to="rightItem._item.to"
                        :color="rightItem._item.color"
                        v-bind="props" />
          </slot>
        </div>
      </slot>
    </div>
    <div v-else class="neo-navbar__items mobile">
      <neo-button padding="0px" class="mx-3" @click="showMobileDrawer = !showMobileDrawer">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7L7 7M20 7L11 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17H17M4 17L13 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12H7L20 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
      </neo-button>
      <div class="drawer" v-if="showMobileDrawer" ref="drawer" :style="drawerStyle">
        <slot name="items-mobile">
          <NeoNavItem v-for="(item, index) in computedItems"
                      :key="index"
                      :label="item._item.label"
                      :to="item._item.to"
                      :color="item._item.color"
                      :backgroundColor="backgroundColor"
                      :active="item.active"
                      @click="activeItem = item.key; closeDrawer()" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { generateDefaultsProps } from "utils/GenericProps";
const defaultProps = generateDefaultsProps({shadow: false, border: false});
</script>

<script setup lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, nextTick, onBeforeMount, Ref, ref, watch } from 'vue';
import NeoNavItem from "./NeoNavItem.vue";
import { generateDefaultsComputed, generateStylesFromProps } from 'utils/GenericComputed';
import type { PropType } from "vue";
import { getRef } from '../utils/ComponentUtils';
import { NeoTheme } from '../types';

type NavbarItem = { label: string, to: string, position: string, color?: string };

const props = defineProps({
  ...defaultProps,
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  items: {
    type: Object as PropType<NavbarItem[]>,
    default: []
  },
  fixed: {
    type: Boolean,
    default: false
  }
});

const showMobileDrawer = ref(false)
const position = ref("initial")
const that = getCurrentInstance();
const activeItem = ref(-1);

const theme = inject('theme') as Ref<NeoTheme>;

const style = ref('');
const drawerStyle = ref('');
const classes = ref('');

const computedItems = ref([] as { _item: NavbarItem, key: number, position: string, active: boolean}[]);

onBeforeMount(() => {
  props.items.forEach((item, index) => {
    computedItems.value.push({
      _item: item,
      key: index,
      position: item.position || 'left',
      active: window.location.pathname === item.to
    })
  })

  console.log(computedItems.value)

  // Generate default styles and classes based on props
  const { style: generatedStyle, classes: generatedClasses } = generateDefaultsComputed(props);
  style.value = generatedStyle;
  classes.value = generatedClasses;
  updateStyle();
});

// Watch for activeItem changes and update computedItems accordingly
watch(activeItem, (newActiveKey) => {
  computedItems.value = computedItems.value.map(item => ({
    ...item,
    active: item.key === newActiveKey
  }));
});

watch(theme, (newTheme) => {
  if(!newTheme) return;
  updateStyle();
}, { deep: true, immediate: true });

watch(showMobileDrawer, (newValue) => {
  if(newValue === true){
    nextTick(() => {
      if(that) {
        const componentPosition = getRef(that, '$el').getBoundingClientRect();
        //get component height and adjust refs.drawer position on it
        const componentHeight = getRef(that, '$el').offsetHeight + componentPosition.top;
        getRef(that, 'drawer').style.top = componentHeight + "px";
        getRef(that, 'drawer').style.height = "100vh";
      }
    });
  }
});

function setActive(selectedItem: any) {
  console.log("selected", selectedItem);
  let oldActiveItem = computedItems.value.find(activeItem => activeItem.active);
  console.log("old active", oldActiveItem)
  if(oldActiveItem != null) oldActiveItem.active = false;
  let newActiveItem = computedItems.value.find(item => item.key === selectedItem.key)
  console.log("new active", newActiveItem)
  if(newActiveItem != null) newActiveItem.active = true;
}

function updateStyle() {
  const backgroundColor = props.backgroundColor || theme.value.schemeColors?.light;
  const color = props.color || theme.value.schemeColors?.dark;
  const labelColor = props.color || theme.value.schemeColors?.dark;

  style.value = generateStylesFromProps({
    ...props,
    backgroundColor,
    color
  });
  if(props.fixed) {
    style.value += "position: fixed; top: 0; left: 0; right: 0; z-index: 9999;";
  }

  drawerStyle.value = "color: " + labelColor + ";";
  if(props.backgroundColor != null) {
    drawerStyle.value += "background-color: " + props.backgroundColor + ";";
  }
}

const closeDrawer = () => {
  showMobileDrawer.value = false;
}

const leftItems = computed(() => {
  if(!computedItems.value.length) return [];
  return computedItems.value.filter(item => item.position == "left");
});

const rightItems = computed(() => {
  if(!computedItems.value.length) return [];
  return computedItems.value.filter(item => item.position == "right");
});

const isMobile = computed(() => {
  return window.innerWidth <= 768;
});
</script>

<style scoped>
  .neo-navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    transition: ease 0.1s;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
  }

  .neo-navbar .neo-navbar__title {
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .neo-navbar .neo-navbar__title>.title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .neo-navbar .neo-navbar__items {
    flex: 8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .neo-navbar .neo-navbar__items .left-items, .neo-navbar .neo-navbar__items .right-items {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  /* =================================== */

  @media screen and (max-width: 768px) {
  .neo-navbar .neo-navbar__title {
    flex: 2;
  }

 .neo-navbar .neo-navbar__items.mobile {
    flex: 1;
    justify-content: flex-end;
  }
}

  .neo-navbar .neo-navbar__items.mobile {
    justify-content: flex-end;
  }

  .neo-navbar .neo-navbar__items.mobile svg {
    width: 30px;
  }

  .neo-navbar .neo-navbar__items.mobile .drawer {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    transition: height 1s ease;
    z-index: 9999;
  }

</style>
