import type { App } from 'vue'
import Button from './components/Button/Button.vue'
import Form from './components/Form/Form.vue'
import FormItem from './components/Form/FormItem.vue'
import Input from './components/Input/Input.vue'
import Select from './components/Select/Select.vue'
import Switch from './components/Switch/Switch.vue'
import css from './styles/index.css?inline'

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.setAttribute('data-v-element', '')
  style.textContent = css
  document.head.appendChild(style)
}

export { Button, Form, FormItem, Input, Select, Switch }

export default {
  install(app: App) {
    app.component('VkButton', Button)
    app.component('VkInput', Input)
    app.component('VkSelect', Select)
    app.component('VkSwitch', Switch)
    app.component('VkForm', Form)
    app.component('VkFormItem', FormItem)
  }
}
