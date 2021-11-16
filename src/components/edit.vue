<template>
<div class="content">
    姓名：<input v-model="$route.query.name" /><br><br>
    年龄：<input v-model="$route.query.age" /><br><br>
    工作：<input v-model="$route.query.work" /><br><br>

    <el-button size="mini" type="primary" @click="this.$router.go(-1)"> 返回 </el-button>
    <el-button size="mini" type="success" > 确定 </el-button>
</div>
</template>

<script setup>

</script>

<style>
.content {
  width: 500px;
  margin: 100px auto;
}
</style>