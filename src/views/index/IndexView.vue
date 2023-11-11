<template>
  <!--  <div>
      <el-tabs tab-position="top" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="home">
          <router-view name="home"/>
        </el-tab-pane>
        <el-tab-pane label="常用" name="commonlyused">
          <router-view name="commonlyUsed"/>
        </el-tab-pane>
        <el-tab-pane label="博客" name="blog">
          <router-view name="blog"/>
        </el-tab-pane>
        <el-tab-pane label="开发" name="dev">
          <router-view name="dev"/>
        </el-tab-pane>
        <el-tab-pane label="工具" name="tool">
          <router-view name="tool"/>
        </el-tab-pane>
        <el-tab-pane label="导航" name="nav">
          <router-view name="nav"/>
        </el-tab-pane>
      </el-tabs>
    </div>-->

  <el-container>
    <el-header>
      <headPage/>
    </el-header>
    <el-main>
      <router-view name="home"/>
      <router-view name="commonlyUsed"/>
      <router-view name="blog"/>
      <router-view name="dev"/>
      <router-view name="tool"/>
      <router-view name="nav"/>
    </el-main>
    <el-footer>
      <footerPage/> <!-- 插入子组件 -->
    </el-footer>
  </el-container>

</template>

<script>


import footerPage from '@/components/home/FooterPage.vue'; // 导入子组件的路径
import headPage from '@/components/home/HeadPage.vue'; // 导入子组件的路径


export default {
  name: "IndexView",
  components: {
    headPage,
    footerPage, // 注册子组件
  },
  data() {
    return {}
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped>
.el-header {
  background-color: #eee2e2;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #f5f3f3;
  color: #333;
  text-align: center;
  line-height: 50px;
}


.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}

body > .el-container {
  margin-bottom: 40px;
  min-height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
