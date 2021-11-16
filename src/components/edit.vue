<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="work" label="职业" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { inject } from "vue"

const tableData = inject("person")

const handleDelete = (index) => {
  tableData.value.splice(index, 1)
}

</script>

<style>

</style>