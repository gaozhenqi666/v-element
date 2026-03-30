<template>
<div
  class="vk-select"
  :class="{ 'is-disabled': disabled, 'is-filterable': props.filterable }"
  @click="handleClick"
>
  <Tooltip
    placement="bottom-start"
    ref="tooltipRef"
    :popperOptions="popperOptions"
    @click-outside="controlDropdown(false)"
    manual
  >
    <Input 
      v-model="states.inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      ref="inputRef"
      :readonly="!props.filterable"
      @input="handleInput"
    >
      <template #suffix>
        <Icon icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownShow }"/>
      </template>
    </Input>
    <template #content>
      <ul class="vk-select__menu">
        <template v-for="(item, index) in displayOptions" :key="index">
          <li 
            class="vk-select__menu-item"
            :class="{'is-disabled': item.disabled, 'is-selected': states.selectedOption?.value === item.value }"
            :id="`select-item-${item.value}`"
            @click.stop="itemSelect(item)"
          >
            {{item.label}}
          </li>
        </template>
        <li v-if="!displayOptions.length" class="vk-select__menu-item is-disabled">
          没有匹配项
        </li>
      </ul>
    </template>
  </Tooltip>
</div>  
</template>
<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, reactive, ref, watch } from 'vue'
import Icon from '../Icon/Icon.vue'
import Input from '../Input/Input.vue'
import type { InputInstance } from '../Input/types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import type { SelectEmits, SelectOption, SelectStates } from './types'
import { selectProps } from './types'

defineOptions({
  name: 'VkSelect'
})
const findOption = (value: string, list: SelectOption[]) => {
  const option = list.find(option => option.value === value)
  return option ? option : null
}
const props = defineProps(selectProps)
const emits = defineEmits<SelectEmits>()
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const initialOption = findOption(props.modelValue, props.options)
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  query: ''
})
const isDropdownShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}

const defaultFilterMethod = (query: string, option: SelectOption) => {
  return option.label.toLowerCase().includes(query.toLowerCase())
}

const displayOptions = computed(() => {
  const list = props.options
  if (!props.filterable) return list
  const q = states.query.trim()
  if (!q) return list
  const method = props.filterMethod || defaultFilterMethod
  return list.filter((opt) => method(q, opt))
})

const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show()
    if (props.filterable) {
      states.query = ''
      states.inputValue = ''
      inputRef.value.ref.focus()
    }
  } else {
    tooltipRef.value.hide()
    if (props.filterable) {
      states.query = ''
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    }
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const handleClick = () => {
  if (props.disabled) return
  if (!isDropdownShow.value) {
    controlDropdown(true)
  }
}

const handleInput = (value: string) => {
  if (!props.filterable) return
  states.query = value
}
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.query = ''
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}

watch(() => props.modelValue, (val) => {
  const opt = findOption(val, props.options)
  states.selectedOption = opt
  if (!props.filterable || !isDropdownShow.value) {
    states.inputValue = states.selectedOption ? states.selectedOption.label : ''
  }
})
</script>
