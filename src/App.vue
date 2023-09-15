<script setup lang="ts">
import { reactive } from 'vue';
import FR from './FR.vue';
import { type Schema } from './types';
const schema = reactive<Schema>({});
const formData = {};
</script>

<template>
  <div class="abb">
    <FR v-model="formData" :schema="schema" />
  </div>
</template>

<style lang="less">
.abb {
  color: #2c3e50;
  font-weight: 400;
  font-size: 12px;
}
</style>
