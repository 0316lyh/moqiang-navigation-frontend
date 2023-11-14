<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple" style="padding-top: 5px; text-align: right">
          <div style="padding-top: 5px">
            <el-avatar
                src="https://moqiang-navigation-1318187204.cos.ap-guangzhou.myqcloud.com/104648733.jpg"
                @click.native="toHome"
                class="clickable-avatar"
            ></el-avatar>
          </div>
        </div>
      </el-col>


      <el-col :span="9" style="text-align: left">
        <div>
          <div class="grid-content bg-purple" style="padding-top: 0px"> &nbsp;&nbsp;摩强导航</div>
        </div>
      </el-col>

      <el-col :span="10">
        <div class="grid-content bg-purple-light">
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="首页" name="home">
              </el-tab-pane>
              <el-tab-pane label="技术社区" name="community">
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
  </div>
</template>

<script>
import axios from "axios";
import store from "../../store";

export default {
  name: "HeadPage",
  data() {
    return {
      activeName: 'home',
    }
  },
  mounted() {
  },
  methods: {
    handleClick() {
      store.commit('changeIndex', this.activeName);
      this.$router.push('/index/' + this.activeName)
      console.log('跳转到' + '/index/' + this.activeName)
    },

    toHome() {
      console.log('toHome');
      this.$router.push('/index/home');
    }
  }
}
</script>

<style scoped>

.clickable-avatar {
  cursor: pointer;
}

</style>
