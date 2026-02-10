<template>
  <table ref="table-slots">
    <thead>
      <tr>
        <th>Name</th>
        <th>Props</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="items.length > 0">
        <tr v-for="(prop, index) in items" :key="index">
          <td><code>{{prop.name}}</code></td>
          <td>{{prop.props.join(', ')}}</td>
          <td>{{prop.description}}</td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="3" class="text-center">No slots ...</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

type SlotItem = {
  name: string,
  props: string[],
  description: string
}

const props = defineProps({
  items: {
    type: Object as PropType<SlotItem[]>,
    default: []
  }
})

</script>

<style>

</style>
