import { App } from "vue"
import { formatUtcString } from "@/utils/formatTime"
export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatUtcString(time: string) {
      return formatUtcString(time)
    }
  }
}
