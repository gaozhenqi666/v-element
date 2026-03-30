---
title: Select | V-Element
description: Select 选择器组件
---

# Select 选择器
当选项多的时候，用下拉来选一个。

## 基础用法
适用广泛的基础单选，`v-model` 的值为当前被选中的 `option.value`。

<preview path="../demo/Select/Basic.vue" title="基础选择器" description="默认只读输入框，点击展开选择"></preview>

## 可搜索
打开下拉后可以输入关键字过滤选项（本地过滤）。

<preview path="../demo/Select/Filterable.vue" title="可搜索选择器" description="filterable：输入过滤选项"></preview>

## 城市搜索（本地表）
用一份本地城市表来展示英文名 + 中文名，输入后过滤。

<preview path="../demo/Select/Cities.vue" title="城市搜索" description="本地数据：城市英文/中文"></preview>

## Select Attributes
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string` | `''` |
| options | 选项列表 | `SelectOption[]` | `[]` |
| placeholder | 占位文字 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |
| filter-method | 自定义过滤方法 | `(query, option) => boolean` | — |

## Select Events
| Name | Description | Type |
| --- | --- | --- |
| change | 选中值变化 | `(value: string) => void` |
| visible-change | 下拉显示/隐藏 | `(visible: boolean) => void` |
