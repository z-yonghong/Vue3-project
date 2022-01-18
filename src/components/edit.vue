<template>
<div class="content">
    姓名：<input v-model="pInfo.name" /><br><br>
    年龄：<input v-model="pInfo.age" /><br><br>
    工作：<input v-model="pInfo.work" /><br><br>

    <el-button size="mini" type="primary" @click="this.$router.go(-1)"> 返回 </el-button>
    <el-button size="mini" type="success" @click="editInfo()"> 确定 </el-button>
</div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';

const { path } = useRoute();
const { go } = useRouter();
const index = path.split("/").reverse()[0];
const pInfo = ref(JSON.parse(localStorage.getItem("personData"))[index] || []);

const editInfo = (e) => {
  const newInfoArr = JSON.parse(localStorage.getItem("personData")) || [];
  newInfoArr[index] = pInfo.value;
  localStorage.setItem("personData", JSON.stringify(newInfoArr));
  go(-1)
}
</script>

<style>
.content {
  width: 500px;
  margin: 100px auto;
}
</style>