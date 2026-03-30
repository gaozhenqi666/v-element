<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { createMessage } from '@/components/Message/method';

const open = () => {
  createMessage({
    message: '点右上角按钮关闭（duration=0）',
    duration: 0,
    showClose: true,
    type: 'info'
  })
}
</script>

<template>
  <Button type="primary" @click="open">可手动关闭</Button>
</template>
