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
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple" style="padding-top: 5px; text-align: right">
            <div>
              <el-avatar
                  src="https://moqiang-navigation-1318187204.cos.ap-guangzhou.myqcloud.com/104648733.jpg"></el-avatar>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple" style="padding-top: 15px"> &nbsp;&nbsp;摩强导航</div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple-light">
            <div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="首页" name="home">
                </el-tab-pane>
                <el-tab-pane label="常用" name="commonlyused">
                </el-tab-pane>
                <el-tab-pane label="博客" name="blog">
                </el-tab-pane>
                <el-tab-pane label="开发" name="dev">
                </el-tab-pane>
                <el-tab-pane label="工具" name="tool">
                </el-tab-pane>
                <el-tab-pane label="导航" name="nav">
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-col>
      </el-row>

    </el-header>
    <el-main>
      <router-view name="home"/>
      <router-view name="commonlyUsed"/>
      <router-view name="blog"/>
      <router-view name="dev"/>
      <router-view name="tool"/>
      <router-view name="nav"/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</template>

<script>


import store from "../../store";
import axios from "axios";

export default {
  name: "IndexView",
  data() {
    return {
      activeName: this.$store.state.index,
      index: this.$store.state.index,
    }
  },
  mounted() {
    console.log(this.index);
    axios.get('/type').then((res) => {
      console.log(res.data);
    })
  },
  methods: {
    handleClick() {
      store.commit('changeIndex', this.activeName);
      this.$router.push('/index/' + this.activeName)
      console.log('跳转到' + '/index/' + this.activeName)
    },
  }
}
</script>

<style scoped>
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
