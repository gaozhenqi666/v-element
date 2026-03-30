<template>
  <div class="vk-form-item" :class="{ 'is-error': !!validateMessage }">
    <div class="vk-form-item__label" :style="labelStyle">
      <span v-if="labelText" class="vk-form-item__label-inner">
        <span v-if="isRequired" class="vk-form-item__required">*</span>
        <span>{{ labelText }}</span>
      </span>
    </div>
    <div class="vk-form-item__content">
      <slot />
      <div v-if="validateMessage" class="vk-form-item__error">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import type { FormItemContext, FormRule } from './types'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from './types'

defineOptions({
  name: 'VkFormItem'
})

interface FormItemProps {
  label?: string
  prop?: string
  required?: boolean
  labelWidth?: string | number
}

const props = defineProps<FormItemProps>()
const formContext = inject(FORM_CONTEXT_KEY, undefined)

const validateMessage = ref('')
const initialValue = ref<any>(undefined)
const labelText = computed(() => props.label || props.prop || '')

const labelStyle = computed(() => {
  const width = props.labelWidth ?? formContext?.labelWidth
  if (!width) return undefined
  const val = typeof width === 'number' ? `${width}px` : width
  return { width: val }
})

const getLabelText = () => props.label || props.prop || 'Field'

const getFieldValue = () => {
  if (!formContext || !props.prop) return undefined
  return formContext.model[props.prop]
}

const getRules = () => {
  const prop = props.prop
  if (!formContext || !prop) return [] as FormRule[]
  const raw = formContext.rules?.[prop]
  const arr = Array.isArray(raw) ? raw : raw ? [raw] : []
  if (props.required) {
    arr.unshift({ required: true, message: `${getLabelText()} is required` })
  }
  return arr
}

const isRequired = computed(() => {
  if (!props.prop) return !!props.required
  const rules = getRules()
  return rules.some((r) => !!r.required)
})

const validateRule = async (rule: FormRule, value: any) => {
  const label = getLabelText()
  if (rule.required) {
    const empty = value === undefined || value === null || value === ''
    if (empty) return rule.message || `${label} is required`
  }
  if (rule.min != null) {
    const len = value == null ? 0 : String(value).length
    if (len < rule.min) return rule.message || `${label} length >= ${rule.min}`
  }
  if (rule.max != null) {
    const len = value == null ? 0 : String(value).length
    if (len > rule.max) return rule.message || `${label} length <= ${rule.max}`
  }
  if (rule.pattern) {
    if (!rule.pattern.test(String(value ?? ''))) return rule.message || `${label} format error`
  }
  if (rule.validator) {
    const res = await rule.validator(value, formContext?.model || {})
    if (res === true) return ''
    if (res === false) return rule.message || `${label} validate failed`
    if (typeof res === 'string') return res
  }
  return ''
}

const validate = async () => {
  validateMessage.value = ''
  const rules = getRules()
  if (!rules.length) return true
  const value = getFieldValue()
  for (const rule of rules) {
    const msg = await validateRule(rule, value)
    if (msg) {
      validateMessage.value = msg
      return false
    }
  }
  return true
}

const resetField = () => {
  if (formContext && props.prop) {
    formContext.model[props.prop] = initialValue.value
  }
  validateMessage.value = ''
}

const clearValidate = () => {
  validateMessage.value = ''
}

const context: FormItemContext = {
  prop: props.prop,
  validate,
  resetField,
  clearValidate
}

provide(FORM_ITEM_CONTEXT_KEY, {
  prop: props.prop,
  validate
})

onMounted(() => {
  if (formContext && props.prop) {
    initialValue.value = formContext.model[props.prop]
  }
  formContext?.addField(context)
})

onBeforeUnmount(() => {
  formContext?.removeField(context)
})
</script>
