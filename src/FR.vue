<template>
  <div>1212121</div>
</template>

<script setup lang="ts">
import { FRProps } from './types';
const props = withDefaults(defineProps<FRProps>(), {
  schema: () => ({}),
  disabled: false,
  readOnly: false,
  labelWidth: '110px',
  locale: 'cn',
  removeHiddenData: false,
  allCollapsed: false,
  requiredMark: true,
});
console.log(props);
</script>
