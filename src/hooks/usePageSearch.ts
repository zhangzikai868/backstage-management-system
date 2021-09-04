import { ref } from "vue"
import { PageContent } from "@/components/page-content"
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const resetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }
  const queryBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, resetBtnClick, queryBtnClick]
}
