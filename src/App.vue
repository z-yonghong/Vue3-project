
<template>
  <!-- <input v-module:value="num1"> -->

  <h1>一个人的信息</h1>
  <h2>姓名：<input type="text" v-model="person.name"></h2>
  <h2>年龄：<input type="text" v-model="person.age"></h2>
  <h2>工作：<input type="text" v-model="person.work"></h2>
  <el-button type="primary" @click="addInfo"> 新增 </el-button>
  <br>
  <br>
  <!-- <Edit></Edit>
  <View></View> -->
  <router-link to="/edit">edit</router-link>
  <router-link to="/view">view</router-link>
  <router-view></router-view>
</template>

<script setup>
import { ref, provide } from "vue"
import Edit  from "./components/edit.vue"
import View from "./components/view.vue"

const person = ref([{
  name: "张三",
  age: 18,
  work: "前端开发"
}])

provide('person', person)

function addInfo() {
  if(!person.value.name || !person.value.age || !person.value.work) return;
  
  person.value.push({
    name: person.value.name,
    age: person.value.age,
    work: person.value.work,
  })
}


</script>

<style>
</style>
