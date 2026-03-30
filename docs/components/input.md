---
title: Input | V-Element
description: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法
通过 `v-model` 绑定输入值。

## 基础文本框

<preview path="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></preview>

## 禁用
## 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件


<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

## 不同尺寸
## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>


## 复合输入
## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## 多行文本
## Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

## 密码输入
## 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

## 一键清空
## 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框


<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

## Input Attributes
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string` | `''` |
| type | 类型 | `string` | `'text'` |
| size | 尺寸 | `'large' \| 'small'` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| placeholder | 占位文字 | `string` | — |
| clearable | 是否可清空 | `boolean` | `false` |
| show-password | 是否显示切换密码图标 | `boolean` | `false` |
| autocomplete | 原生 autocomplete | `string` | `'off'` |
| autofocus | 原生 autofocus | `boolean` | `false` |

## Input Events
| Name | Description | Type |
| --- | --- | --- |
| input | 输入时触发 | `(value: string) => void` |
| change | 值改变且失焦时触发 | `(value: string) => void` |
| focus | 获取焦点 | `(e: FocusEvent) => void` |
| blur | 失去焦点 | `(e: FocusEvent) => void` |
| clear | 点击清空按钮 | `() => void` |
