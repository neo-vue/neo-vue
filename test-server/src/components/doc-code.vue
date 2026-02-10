<template>
<div class="doc-code">
  <neo-button background-color="#e7e1e1" color="black" rounded class="copy-button" @click="copyToClipboard">{{ copyText }}</neo-button>
<!--  <CodeHighlight class="snippet" :language="lang">-->
<!--    {{value}}-->
<!--  </CodeHighlight>-->
  <highlightjs :language="lang" :code="value" class="rounded" />
</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';

const props = defineProps({
  lang: {
    type: String,
    default: 'html'
  },
  value: {
    type: String,
    required: true
  }
})

const theme = ref(localStorage.getItem('theme'));

const that = getCurrentInstance();
const copyText = ref('Copy')

onMounted(() => {
  that?.proxy?.$forceUpdate();
  // codeToHtml(props.value, {
  //   lang: props.lang,
  //   theme: 'ayu-dark'
  // }).then((result) => {
  //   html.value = result;
  // })
  // window.addEventListener('dark-theme', () => {
  //   console.log('dark-theme');
  // })
})

function copyToClipboard() {
  navigator.clipboard.writeText(props.value);
   copyText.value = 'Copied!';
   setTimeout(() => {
     copyText.value = 'Copy';
   }, 2000);
}

</script>

<style>
  .doc-code {
    /* background-color: #dfe4ea; */
    width: 100%;
    position: relative;
  }

  .doc-code .copy-button {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    z-index: 10;
  }

  .doc-code .snippet {
    width: inherit;
    overflow: scroll;
  }

  .doc-code .hljs {
    border-radius: 5px;
  }
</style>
