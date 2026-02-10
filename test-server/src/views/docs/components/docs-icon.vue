<template>
  <div class="section">
    <div class="title">
      Icons
    </div>
    <div class="content">
      <p><strong>Neo-icon</strong> is a set of icons designed by <a href="https://boxicons.com">Boxicons</a>.
        It's a free set of icons that can be used in your projects. This component allow you to use theirs icons.
        All props available can be found in their docs, and this component just bind props given to <code>box-icon</code> tag.</p>

      <div class="subsection">
        <div class="title">Basic</div>
        <div class="content">
          <DocExample :code-snippets="[{code: basic, lang: 'html'}]">
            <neo-icon name="home" size="lg"/>
          </DocExample>
        </div>
      </div>

      <div class="subsection">
        <div class="title mb-15">Official BoxIcons documentation</div>
        <div class="content">
          <neo-card rounded width="90%">
            <iframe src="https://docs.boxicons.com/" frameborder="0" width="100%" height="500px"></iframe>
          </neo-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DocExample from '@/components/doc-example.vue';

  const basic = `<neo-icon name="home" size="lg"/>`;
</script>
