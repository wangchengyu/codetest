<template>
  <el-container id="app" >
    <el-header>
    <TopHeader />
    </el-header>
    <el-main>
    <router-view />
    </el-main>
  </el-container>
</template>

<script>
import TopHeader from "@/components/TopHeader"

export default {
  name: 'App',
  components: {TopHeader}
}
</script>
<style >
  .el-header {
    background-color:#ffffff;
    color: #409EFF;
    top: 5;
    left: 10;
    width: 100%;

    z-index: 100;
    position: relative;
  }


  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  *, :before, :after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    overflow: auto;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    background-color: #efefef;
    color: #555;
  }

</style>
