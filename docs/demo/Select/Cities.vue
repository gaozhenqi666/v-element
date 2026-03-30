<script setup lang="ts">
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'

const value = ref('')
const cityOptions = [
  { label: 'Beijing 北京', value: 'beijing' },
  { label: 'Shanghai 上海', value: 'shanghai' },
  { label: 'Guangzhou 广州', value: 'guangzhou' },
  { label: 'Shenzhen 深圳', value: 'shenzhen' },
  { label: 'Hangzhou 杭州', value: 'hangzhou' },
  { label: 'Chengdu 成都', value: 'chengdu' },
  { label: 'Wuhan 武汉', value: 'wuhan' },
  { label: 'Xi’an 西安', value: 'xian' },
  { label: 'Nanjing 南京', value: 'nanjing' },
  { label: 'Suzhou 苏州', value: 'suzhou' },
  { label: 'Tianjin 天津', value: 'tianjin' },
  { label: 'Chongqing 重庆', value: 'chongqing' },
  { label: 'Xiamen 厦门', value: 'xiamen' },
  { label: 'Qingdao 青岛', value: 'qingdao' }
]
</script>

<template>
  <Select
    v-model="value"
    placeholder="搜索城市（英文/拼音/中文）"
    :options="cityOptions"
    filterable
  />
  <span style="margin-left: 8px">{{ value }}</span>
</template>
