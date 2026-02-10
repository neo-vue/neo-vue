<template>
  <div class="section utilities">
    <div class="title">Utilities</div>
    <div class="content">
      <p>
        Neo Vue provides a set of utilities to help you build your application. These utilities are designed
        to be simple and easy to use.
      </p>

      <div class="subsection">
        <div class="title">Functions</div>
        <div class="content">

          <div class="subsection">
            <div class="title">useTheme</div>
            <div class="content">
              <p>
                The <code>useTheme</code> function is a composable that provides access to the current theme. It returns an
                object containing the theme colors and other reactive properties. You can use it like this:
              </p>
              <DocCode :value="basicUseTheme" lang="js" />

              <p>You can dynamically custom the embedded theme, by using <code>setTheme</code> method provided in previous example. Here is an example :</p>
              <DocCode :value="customTheme" lang="js" />
            </div>
          </div>

          <div class="subsection">
            <div class="title">darkedColor</div>
            <div class="content">
              <p>
                The <code>darkedColor</code> function is used to darken a color by a given percentage. It takes a color
                string and a percentage as arguments and returns the darkened color.
              </p>
              <DocCode :value="basicDarkedColor" lang="js" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocCode from '@/components/doc-code.vue';

const basicUseTheme = `import { useTheme } from '@neo-vue/neo-ui';
const { theme, setTheme, darkMode, setDarkMode } = useTheme();`;

const customTheme = `import { useTheme } from '@neo-vue/neo-ui';
const { theme, setTheme, darkMode, setDarkMode } = useTheme();
// ...
onMounted(() => {
  setTheme({...theme, warning: '#ffcc00', error: '#ff0000', success: '#00cc00'});
});
`;

const basicDarkedColor = `import { darkedColor } from '@neo-vue/neo-ui';
const darkenedColor = darkedColor('#ff0000', 0.2); // Darkens the color by 20%`;

</script>

<style scoped>
.utilities {
  min-height: 100dvh;
}
</style>
