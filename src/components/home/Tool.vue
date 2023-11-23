<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          &nbsp;
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-table
              :data="fromData"
              style="width: 100%">
            <el-table-column prop="" label=" " width="180px"></el-table-column>

            <el-table-column label="图标" align="center">
              <template v-slot="scope">
                <div class="block">
                  <el-avatar shape="square" :size="70"
                             :src="scope.row.icon"
                             class="clickable-avatar"
                             @click.native="toWebsite(scope.row.url)"/>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="name" label="网站名"></el-table-column>
            <el-table-column prop="content" label="介绍"></el-table-column>
            <el-table-column prop="url" label="地址">
              <template v-slot="scope">
                <el-link :href="scope.row.url" target="_blank">{{ delWebsitePrefix(scope.row.url) }}</el-link>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="liked" label="点赞数"></el-table-column>

            <el-table-column prop="" label="点赞">
              <template v-slot="scope">
                <el-row>
                  <el-button type="primary" icon="el-icon-top" @click="addLiked(scope.row.id)"></el-button>
                </el-row>
              </template>
            </el-table-column>

            <el-table-column prop="" label=" " width="180px"></el-table-column>

          </el-table>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          &nbsp;
        </div>
      </el-col>
    </el-row>
    <br>
    <el-pagination
        :hide-on-single-page="value"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
    >
    </el-pagination>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Tool",
  data() {
    return {
      fromData: [],
      total: 0,
      pageSize: this.$store.state.pageSize,
      currentPage: 1,
      value: true,
    }
  },
  mounted() {
    // this.$store.dispatch
    this.getAll();
    this.getTotal();
  },
  methods: {
    // 获取数据
    getAll() {
      axios.get('/website/getbytoptype/' + 'tool/' + this.pageSize + '/' + this.currentPage).then((res) => {
        this.fromData = res.data.data;
        console.log(this.fromData);
      })
    },
    // 点赞
    addLiked(id) {
      axios.put('/website/addLiked/' + id).then((res) => {
        console.log(id);
        this.getAll();
      })
    },
    // 跳转到网站
    toWebsite(url) {
      console.log(url);
      // 替换成您希望跳转的 URL
      window.open(url);
    },
    // 删除网站前缀
    delWebsitePrefix(url) {
      // "https://javaguide.cn" ==> "javaguide.cn"
      return url.replace(/(^\w+:|^)\/\//, '');
    },
    // 获取分页总条数
    getTotal() {
      axios.get('/website/getTotal/' + 'tool').then((res) => {
        this.total = res.data.data;
        console.log("total: " + this.total);
      })
    },
    // 当前页码发生变化
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      axios.get('/website/getbytoptype/' + 'tool/' + this.pageSize + '/' + currentPage).then((res) => {
        this.currentPage = currentPage;
        this.fromData = res.data.data;
        console.log(this.fromData);
      })
    },
    getPageSize() {
      axios.get('/system/getpagesize').then((res) => {
        this.pageSize = res.data.data;
        console.log("pageSize: " + this.pageSize);
      })
    }
  }
}
</script>

<style scoped>
/*头像可点击*/
.clickable-avatar {
  cursor: pointer;
}

</style>
