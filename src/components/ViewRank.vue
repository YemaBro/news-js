<template>
  <div class="rank-box">
    <el-card class="box-card">
      <div class="text item">
        <ul>
          <li class="rank-list" v-for="(data,index) in RankData" :key="index">
            <a :href="data.vurl" target="_blank">
              <span class="rank">{{index+1+'.'}}&nbsp;</span>{{data.title}}
              <div class="hot">
                {{data.view_count}}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ViewRank',
  data () {
    return {
      RankData: []
    }
  },
  mounted () {
    this.$axios.get('/api/tencentnews/view_rank').then(res => {
      this.RankData = res.data
    })
  }
}
</script>

<style scoped>
  .rank-list {
    text-align: left;
    list-style: none;
    font-size: 16px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
  }

  .rank {
    font-size: 20px;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }
  a:hover{
    color: orangered;
  }
  .hot {
    text-align: right;
  }
</style>
