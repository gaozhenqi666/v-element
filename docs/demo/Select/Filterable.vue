<script setup>
import Select from '@/components/Select/Select.vue';
import { ref } from 'vue';

const value = ref('')
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Strawberry', value: 'strawberry' }
]
</script>

<template>
  <Select
    v-model="value"
    placeholder="点开后直接输入过滤，比如 ap"
    :options="options"
    filterable
  />
  <span style="margin-left: 8px">{{ value }}</span>
</template>
