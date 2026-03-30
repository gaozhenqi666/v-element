<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import { closeAll, createMessage } from '@/components/Message/method'

const openInfo = () => {
  createMessage({
    message: '这是一条消息',
    type: 'info',
    duration: 3000
  })
}

const openSuccess = () => createMessage({ message: 'success message', type: 'success', duration: 3000 })
const openWarning = () => createMessage({ message: 'warning message', type: 'warning', duration: 3000 })
const openDanger = () => createMessage({ message: 'danger message', type: 'danger', duration: 3000 })

const openLong = () => {
  createMessage({
    message: '5 秒后自动消失（duration=5000）',
    type: 'info',
    duration: 5000
  })
}
</script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="info" @click="openInfo">Info</Button>
    <Button type="success" @click="openSuccess">Success</Button>
    <Button type="warning" @click="openWarning">Warning</Button>
    <Button type="danger" @click="openDanger">Danger</Button>
    <Button type="primary" @click="openLong">自定义时长</Button>
    <Button @click="closeAll">全部关闭</Button>
  </div>
</template>
