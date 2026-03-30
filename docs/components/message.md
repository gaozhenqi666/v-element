---
title: Message | V-Element
description: Message 组件的文档
---

# Message 消息提示
用来在页面顶部弹个提示，默认会自动消失，也可以手动关闭。

## 基础用法
<preview path="../demo/Message/Basic.vue" title="基础用法" description="不同 type + duration 控制自动消失"></preview>

## 可手动关闭
<preview path="../demo/Message/Close.vue" title="可手动关闭" description="duration=0 + showClose，右侧关闭图标用 VkIcon"></preview>

## Message Options（createMessage）
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| message | 文本/VNode 内容 | `string \| VNode` | — |
| type | 类型 | `'success' \| 'info' \| 'warning' \| 'danger'` | `'info'` |
| duration | 自动关闭时间，0 不自动关闭 | `number` | `3000` |
| showClose | 是否显示右侧关闭按钮 | `boolean` | `false` |
| offset | 距离顶部的偏移 | `number` | `20` |
| transitionName | 动画名 | `string` | `'fade-up'` |

## Methods
| Name | Description | Type |
| --- | --- | --- |
| createMessage | 创建一条消息 | `(options) => instance` |
| closeAll | 关闭所有消息 | `() => void` |
