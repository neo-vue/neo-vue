<template>
  <neo-tabs :options="tabs" v-model="tabChooen" :width="isMobile ? '90%' : '100%'" rounded shadow background-color="#e7e1e1">
    <template #code>
      <div v-for="snippet in props.codeSnippets" :key="snippet.lang" class="snippet-preview">
        <DocCode :value="snippet.code" :lang="snippet.lang" theme="light" />
      </div>
    </template>
    <template #preview>
      <div class="preview">
        <slot />
      </div>
    </template>
  </neo-tabs>
</template>

<script setup lang="ts">
import { PropType, ref, computed } from 'vue';
import DocCode from '@/components/doc-code.vue';

const props = defineProps({
  codeSnippets: {
    type: Array as PropType<{code: string, lang: string}[]>,
    required: true
  }
})

const tabs = ref([
  {key: 'code', value:'Code'},
  {key: 'preview', value:'Preview'}
])
const tabChooen = ref('preview')

const isMobile = computed(() => {
  return window.innerWidth < 768;
})

</script>

<style scoped>
.preview {
  padding: 20px;
}

.snippet-preview {
  padding: 10px 20px;
}
</style>
