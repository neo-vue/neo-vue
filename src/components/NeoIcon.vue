<template>
  <slot>
    <span class="neo-icon">
      <box-icon v-bind="$attrs" />
    </span>
  </slot>
</template>

<style>
.neo-icon {
  display: inline-block;
}
</style>
