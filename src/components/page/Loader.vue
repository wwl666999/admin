<!--  -->
<template>
    <div class="container">
       <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="导出Excel" name="exportExcel">
      <export-excel
      file-name="数据表"
      :header="['姓名', '年龄', '性别', '电话',  '毕业时间']"
      :filter-filed="['name', 'age', 'gender', 'mobilePhone', 'graduationDate']"
      :data="tableData"
    >
      导出excel
    </export-excel>

    <el-table border highlight-current-row :data="tableData">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="mobilePhone" label="手机号"> </el-table-column>
      <el-table-column prop="graduationDate" label="毕业时间"> </el-table-column>
    </el-table>
    </el-tab-pane>
    <el-tab-pane label="导入Excel" name="uploadExcel">
      <upload-excel :before-upload="beforeUpload" :on-success="handleSuccess" />
    <el-table :data="tableData1" border highlight-current-row>
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
    </el-tab-pane>
  </el-tabs>

    </div>
</template>

<script>
import ExportExcel from '@/components/business/excel/export-excel'
import UploadExcel from '@/components/business/excel/upload-excel'

const tableData = [
  {
    name: '张三',
    age: 21,
    gender: '男',
    mobilePhone: '15999999991',
    graduationDate: '2005/07/01'
  },
  {
    name: '赵六',
    age: 20,
    gender: '男',
    mobilePhone: '',
    graduationDate: '2011/08/10'
  },
  {
    name: '李四',
    age: 30,
    gender: '',
    mobilePhone: '15999999939',
    graduationDate: '1997/06/05'
  },
  {
    name: '王五',
    age: 28,
    gender: '男',
    mobilePhone: '15999999996',
    graduationDate: '1998/06/05'
  }
]

export default {
  name: 'Excel',
  components: {
    ExportExcel,
    UploadExcel
  },
  data() {
    return {
      tableData,
      activeName: 'exportExcel',
      tableData1:[],
      tableHeader: []
    }
  },
    methods: {
    beforeUpload(file) {
      const isLt20M = file.size / 1024 / 1024 < 20
      if (!isLt20M) {
        this.$message.error('上传的文件大小不能超过 20MB!')
      }
      return isLt20M
    },
    handleSuccess(header, result) {
      this.tableHeader = header
      this.tableData = result
      this.$message.success('上传成功！')
    }
  }
}
</script>

<style scoped>
    h3{
        margin-left: 10px;
    }
</style>