---
title: Form | V-Element
description: Form 表单的文档
---

# Form 表单
写点表单，顺便做个最基础的校验。

## 什么时候用
需要把一堆输入组件包起来，然后统一校验、统一重置的时候就用它。

## 基础表单 + 校验
<preview path="../demo/Form/Basic.vue" title="基础表单" description="包含 required / min / pattern 三种校验"></preview>

## 细节
- 必填字段：label 前面会有一个红色 *
- 单项校验：Input blur 的时候，会只校验当前这一项

## Form Attributes
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model | 表单数据对象 | `Record<string, any>` | — |
| rules | 校验规则 | `FormRules` | — |
| label-width | label 宽度 | `string \| number` | — |
| inline | 是否行内表单 | `boolean` | `false` |

## Form Methods
| Name | Description | Type |
| --- | --- | --- |
| validate | 校验全部字段 | `(cb?) => Promise<boolean>` |
| validateField | 校验单个字段 | `(prop: string) => Promise<boolean>` |
| resetFields | 重置全部字段 | `() => void` |
| clearValidate | 清除校验信息 | `(props?) => void` |

## FormItem Attributes
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | label 文案 | `string` | — |
| prop | 对应 model 字段 | `string` | — |
| required | 强制必填（会在规则最前面加 required） | `boolean` | `false` |
| label-width | 单独设置 label 宽度 | `string \| number` | — |
