<template>
  <table ref="table-props">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="items.length > 0">
        <tr v-for="(prop, index) in items" :key="index">
          <td><code>{{prop.name}}</code></td>
          <td>{{prop.type.join(', ')}}</td>
          <td>{{prop.required}}</td>
          <td>{{prop.default}}</td>
          <td>{{prop.description}}</td>
        </tr>
      </template>

      <tr v-else>
        <td colspan="5" class="text-center">No props ...</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

export type PropItem = {
  name: string,
  type: string[],
  required: boolean,
  default: string | boolean | null,
  description: string
}

defineProps({
  items: {
    type: Array<PropItem>,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: []
  },
  // overrideDefaultProps: {
  //   type: Object as PropType<PropItem[]>,
  //   default: []
  // }
})

// const defaultProps = [
//   { name: 'color', type: 'String', required: false, default: 'black', description: 'Component color' },
//   { name: 'backgroundColor', type: 'String', required: true, default: 'white', description: 'Component background color' },
//   { name: 'rounded', type: 'String', required: false, default: 'null', description: 'Component Component radius' },
//   { name: 'shadow', type: 'Boolean', required: false, default: 'true', description: 'Component shadow' },
//   { name: 'border', type: 'String', required: false, default: 'null', description: 'Component border'},
//   { name: 'padding', type: 'String', required: false, default: 'null', description: 'Component padding' },
//   { name: 'width', type: 'String', required: false, default: 'null', description: 'Component width' },
//   { name: 'height', type: 'String', required: false, default: 'null', description: 'Component height' },
//   // { name: 'disabled', type: 'Boolean', required: false, default: 'false', description: 'Button disabled' }
// ]

// const items = [...props.items, ...defaultProps].map((item) => {
//   const potentialOverridedProp = props.overrideDefaultProps.find(p => p.name === item.name)
//   if(props.overrideDefaultProps.find(p => p.name === item.name)){
//     return potentialOverridedProp
//   }
//   return item
// })

</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    display: inline-table;
    overflow-x: auto;
    white-space: nowrap;
  }
  table thead tr th {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  table tbody tr td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  @media screen and (max-width: 768px) {
    table {
      display: inline-block;
    }

    table tbody {
      overflow-x: auto;
    }
  }
</style>
