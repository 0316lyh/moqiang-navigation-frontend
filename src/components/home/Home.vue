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
            <el-table-column
                prop=""
                label=" "
                width="180px"
            ></el-table-column>

            <el-table-column label="图标" align="center">
              <template v-slot="scope">
                <div class="block">
                  <el-avatar shape="square" :size="70"
                             :src=" 'https://moqiang-navigation-1318187204.cos.ap-guangzhou.myqcloud.com/icon%2F' +  scope.row.id+ '.jpg'"/>
                </div>
              </template>
            </el-table-column>

            <el-table-column
                prop="name"
                label="网站名"
            >
            </el-table-column>

            <el-table-column
                prop="content"
                label="介绍"
            >
            </el-table-column>
            <el-table-column
                prop="url"
                label="地址"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="liked"
                label="点赞数"
            >

            </el-table-column>
            <el-table-column
                prop=""
                label="点赞"
            >
              <template v-slot="scope">
                <el-row>
                  <el-button type="primary" icon="el-icon-top" @click="addLiked(scope.row.id)"></el-button>
                </el-row>
              </template>
            </el-table-column>

            <el-table-column
                prop=""
                label=" "
                width="180px"
            >
            </el-table-column>

          </el-table>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          &nbsp;
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      fromData: [],
      topNum: this.$store.state.topNum,
    }
  },
  mounted() {
    // this.$store.dispatch
    this.getAll();
  },
  methods: {
    getAll() {
      axios.get('/website/getTopByLiked/' + this.topNum).then((res) => {
        this.fromData = res.data.data;
        console.log(this.fromData);
      })
    },
    addLiked(id) {
      axios.put('/website/addLiked/' + id).then((res) => {
        console.log(id);
        this.getAll();
      })
    }
  }
}
</script>

<style scoped>


</style>
