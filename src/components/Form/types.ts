import type { InjectionKey } from 'vue'

export type FormRuleValidator = (value: any, model: Record<string, any>) => boolean | string | Promise<boolean | string>

export interface FormRule {
  required?: boolean
  min?: number
  max?: number
  pattern?: RegExp
  message?: string
  validator?: FormRuleValidator
}

export type FormRules = Record<string, FormRule | FormRule[]>

export interface FormItemContext {
  prop?: string
  validate: () => Promise<boolean>
  resetField: () => void
  clearValidate: () => void
}

export interface FormItemValidateContext {
  validate: () => Promise<boolean>
  prop?: string
}

export interface FormContext {
  model: Record<string, any>
  rules?: FormRules
  labelWidth?: string | number
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export interface FormProps {
  model: Record<string, any>
  rules?: FormRules
  labelWidth?: string | number
  inline?: boolean
}

export interface FormEmits {
  (e: 'validate', prop: string | undefined, valid: boolean, message: string): void
}

export interface FormInstance {
  validate: (callback?: (valid: boolean) => void) => Promise<boolean>
  validateField: (prop: string) => Promise<boolean>
  resetFields: () => void
  clearValidate: (props?: string | string[]) => void
}

export const FORM_CONTEXT_KEY: InjectionKey<FormContext> = Symbol('FORM_CONTEXT_KEY')
export const FORM_ITEM_CONTEXT_KEY: InjectionKey<FormItemValidateContext> = Symbol('FORM_ITEM_CONTEXT_KEY')
