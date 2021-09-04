<template>
  <!-- table表格内容 -->
  <div class="table">
    <zk-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      @handleSelectionChange="handleSelectionChange"
    >
      <!-- 表格header插槽 -->
      <template #headerHandler>
        <slot name="btnTitle"></slot>
      </template>

      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'primary' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        {{ $filters.formatUtcString(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatUtcString(scope.row.updateAt) }}
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #handler>
        <div class="hander-btns">
          <el-button icon="el-icon-edit" type="text" size="mini"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" type="text" size="mini"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 分页器，内部有默认分页器 -->
      <template #footer></template>
    </zk-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import { useStore } from "vuex"
// 按钮权限管理
// import { usePermission } from "@/hooks/usePermissions"
import zkTable from "@/base-ui/table/src/Table.vue"

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    // 获取操作的权限
    // const isCreate = usePermission(props.pageName, "create")
    // const isUpdate = usePermission(props.pageName, "update")
    // const isDelete = usePermission(props.pageName, "delete")
    // const isQuery = usePermission(props.pageName, "query")

    // 双向绑定pageInfo 分页器中
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    // 监听pageSize重新发送网络请求
    watch(pageInfo, () => {
      getPageData()
    })

    // 请求数据
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // userList数据从vuex中获取
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    const userCount = computed(() => store.state.system.userCount)
    // 监听是否被选中，内部发送emit事件拿到选中的数据
    const handleSelectionChange = (value: any) => {
      console.log(value)
    }

    return {
      dataList,
      dataCount,
      userCount,
      handleSelectionChange,
      getPageData,
      pageInfo
    }
  },
  components: {
    zkTable
  }
})
</script>

<style scoped>
.table {
  padding: 0 20px 0 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
