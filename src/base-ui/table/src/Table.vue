<template>
  <div class="zk-table">
    <div class="header">
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </div>

    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showCheckoutColumn"
        type="selection"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        width="80"
        type="index"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.name">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    listData: {
      type: Array,
      require: true
    },
    listCount: {
      type: Number
    },
    propList: {
      type: Array,
      require: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showCheckoutColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ["handleSelectionChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("handleSelectionChange", value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-weight: bold;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
    padding-bottom: 5px;
  }
}
</style>
