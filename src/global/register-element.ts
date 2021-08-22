import { App } from "vue"
import "element-plus/lib/theme-chalk/base.css"

import { ElButton, ElInput } from "element-plus"
const components = [ElButton, ElInput]

export default function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
