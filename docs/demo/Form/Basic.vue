<script setup lang="ts">
import { reactive, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import FormItem from '@/components/Form/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import type { FormInstance, FormRules } from '@/components/Form/types'

const formRef = ref<FormInstance>()
const model = reactive({
  username: '',
  email: '',
  password: ''
})

const rules: FormRules = {
  username: [{ required: true, message: '请输入用户名' }],
  email: [
    { required: true, message: '请输入邮箱' },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不对' }
  ],
  password: [{ required: true, min: 6, message: '密码至少 6 位' }]
}

const submit = async () => {
  const ok = await formRef.value?.validate()
  if (ok) {
    alert('校验通过')
  } else {
    console.log('校验没过', model)
  }
}

const reset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <Form ref="formRef" :model="model" :rules="rules" label-width="90px">
    <FormItem label="用户名" prop="username">
      <Input v-model="model.username" placeholder="随便写点" />
    </FormItem>
    <FormItem label="邮箱" prop="email">
      <Input v-model="model.email" placeholder="name@example.com" />
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="model.password" type="password" placeholder="至少 6 位" show-password />
    </FormItem>
    <FormItem label="">
      <Button type="primary" @click="submit">提交</Button>
      <Button style="margin-left: 8px" @click="reset">重置</Button>
    </FormItem>
  </Form>
</template>
