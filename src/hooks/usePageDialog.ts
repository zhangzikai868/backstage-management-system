import { ref } from "vue"
import PageDialog from "@/components/page-dialog"
type CallBackType = (item?: any) => void
export function usePageDialog(
  newCallback?: CallBackType,
  editCallback?: CallBackType
) {
  const pageDialogRef = ref<InstanceType<typeof PageDialog>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    if (pageDialogRef.value) {
      defaultInfo.value = {}
      pageDialogRef.value.centerDialogVisible = true
    }
    newCallback && newCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageDialogRef.value) {
      pageDialogRef.value.centerDialogVisible = true
    }
    editCallback && editCallback(item)
  }
  return [pageDialogRef, defaultInfo, handleNewData, handleEditData]
}
