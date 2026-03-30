import type { PropType } from 'vue';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectFilterMethod = (query: string, option: SelectOption) => boolean

export interface SelectProps {
  // v-model
  modelValue: string;
  // 选项
  options: SelectOption[];
  // 一些基本表单属性
  placeholder?: string;
  disabled?: boolean;
  filterable?: boolean;
  filterMethod?: SelectFilterMethod;
}
export interface SelectStates {
  inputValue: string;
  selectedOption: null | SelectOption;
  query: string;
}
export interface SelectEmits {
  (e:'change', value: string) : void;
  (e:'update:modelValue', value: string) : void;
  (e: 'visible-change', value:boolean): void;
}

export const selectProps = {
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => []
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  filterable: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: Function as PropType<SelectFilterMethod>
  }
}
