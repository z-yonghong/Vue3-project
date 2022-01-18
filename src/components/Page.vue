<template>
  <div>
    <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
      <el-table-column fixed prop="id" label="编号"> </el-table-column>
      <el-table-column prop="name" label="书名"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="name" label="书名"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// 前端路由
const currentPage = ref(1);
const pageSize = ref(6)

const  tableData = [
      {
        id: "1",
        name: "西游记",
        author: "吴承恩",
      },
      {
        id: "2",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "3",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "4",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "5",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "6",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "7",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "8",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "9",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "10",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "11",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "12",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "13",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "14",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "15",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "16",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "17",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "18",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "19",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "20",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "21",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "22",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "23",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "24",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "25",
        name: "三国演义",
        author: "罗贯中",
      },
      {
        id: "26",
        name: "水浒传",
        author: "施耐庵",
      },
      {
        id: "27",
        name: "红楼梦",
        author: "曹雪芹",
      },
      {
        id: "28",
        name: "三国演义",
        author: "罗贯中",
      },
    ];

const total = ref(tableData.length);

  const handleSizeChange = () => {

  }
  const handleCurrentChange = (newCurrent) => {
    currentPage.value = newCurrent;
  }
</script>
