import { App } from "vue"
import "element-plus/lib/theme-chalk/base.css"

import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem
} from "element-plus"
const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem
]

export default function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
