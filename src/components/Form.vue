<template>
  <h1>一个人的信息</h1>
  <h2>姓名：<input type="text" v-model="personInfo.name"></h2>
  <h2>年龄：<input type="text" v-model="personInfo.age"></h2>
  <h2>工作：<input type="text" v-model="personInfo.work"></h2>
  <el-button type="primary" @click="addInfo"> 新增 </el-button>

  <el-table :data="person" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="work" label="职业" />
    <el-table-column label="Operations">
      <template #default="scope">
      <!-- @click="editInfo(this.$router, scope.row)" -->
        <el-button size="mini" @click="editInfo(this.$router, scope.row, scope.$index)">
        <!-- <router-link :to="'/edit/'+ scope.$index">edit</router-link> -->
         edit
        </el-button>
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

import { ref } from "vue"

// 动态获取input的value值
const personInfo = ref({
  name: "",
  age: "",
  work: ""
})

// 一开始先获取person值，初始化页面
let person = ref(JSON.parse(localStorage.getItem("personData")) || []);

function addInfo() {
  if(!personInfo.value.name || !personInfo.value.age || !personInfo.value.work) return;
  const arr = [];
  // 将之前已存在的值和新加的值都放在arr数组里，一起重新添加到localStorage里。
  arr.push(personInfo.value, ...person.value);
  localStorage.setItem("personData", JSON.stringify(arr))
  // 添加新值后更新页面
  person.value = JSON.parse(localStorage.getItem("personData")) || [];
}

const handleDelete = (index) => {
  
  const aa = JSON.parse(localStorage.getItem("personData")) || [];
  aa.splice(index, 1);

  localStorage.setItem("personData", JSON.stringify(aa))
  person.value = JSON.parse(localStorage.getItem("personData")) || [];
}

const editInfo = (router, info, index) => {
  // console.log(info)
  router.push({
    path: `/edit/${index}`,
    params: {index},
    // query:{
    //   name: info.name,
    //   age: info.age,
    //   work: info.work
    // },
  })
}

</script>

<style>

</style>