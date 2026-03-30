<template>
  <form class="vk-form" :class="{ 'vk-form--inline': inline }" @submit.prevent>
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue';
import type { FormInstance, FormItemContext, FormProps } from './types';
import { FORM_CONTEXT_KEY } from './types';

defineOptions({
  name: 'VkForm'
})

const props = withDefaults(defineProps<FormProps>(), {
  inline: false
})

const fields = reactive<FormItemContext[]>([])

const addField = (field: FormItemContext) => {
  if (!fields.includes(field)) fields.push(field)
}
const removeField = (field: FormItemContext) => {
  const index = fields.indexOf(field)
  if (index > -1) fields.splice(index, 1)
}

const validate = async (callback?: (valid: boolean) => void) => {
  let valid = true
  for (const field of fields) {
    const fieldValid = await field.validate()
    if (!fieldValid) valid = false
  }
  callback?.(valid)
  return valid
}

const validateField = async (prop: string) => {
  const field = fields.find((f) => f.prop === prop)
  if (!field) return true
  const ok = await field.validate()
  return ok
}

const resetFields = () => {
  fields.forEach((f) => f.resetField())
}

const clearValidate = (props?: string | string[]) => {
  const propList = Array.isArray(props) ? props : props ? [props] : []
  fields.forEach((f) => {
    if (!propList.length || (f.prop && propList.includes(f.prop))) {
      f.clearValidate()
    }
  })
}

provide(FORM_CONTEXT_KEY, {
  model: props.model,
  rules: props.rules,
  labelWidth: props.labelWidth,
  addField,
  removeField
})

defineExpose<FormInstance>({
  validate,
  validateField,
  resetFields,
  clearValidate
})
</script>
