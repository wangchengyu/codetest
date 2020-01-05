<template>
    <div style="display:flex;">
        <div style="font-size:36px;margin-top:10px; padding-right: 36px;">Code Test</div>
        <el-menu :default-active="$route.path"
                 class="el-menu-demo tab-page"
                 mode="horizontal"
                 @select="handleSelect"
                 active-text-color="#409EFF"
                 router>
            <el-menu-item index="/pets">Pets</el-menu-item>
            <el-menu-item index="/weather">weather</el-menu-item>
        </el-menu>
    </div>

</template>

<script>
export default {
  name: 'topHeader'
}
</script>
