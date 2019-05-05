<template>
  <div class="news-box">
    <el-card class="box-card" v-for="(news, index) in NewsData" :key="index">
      <div slot="header" class="clearfix">
        <router-link tag="span" :to="{name:'detail',query:{id:news.id}}" span="3">
          <a target="_blank">{{news.title}}</a>
        </router-link>
        <span class="title"><a :href="news.vurl" target="_blank"></a></span>
      </div>
      <div class="text item">
        <div class="content" v-html="news.intro">
          {{news.intro}}
        </div>
        <span class="pub-time">发布时间：{{news.publish_time}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      // id: '1',
      NewsData: []
    }
  },
  mounted () {
    this.$axios.get('/api/tencentnews').then(res => {
      this.NewsData = res.data.map(item => {
        item.intro = item.intro.replace(/\s+/g, '')
        return item
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    cursor: pointer;
  }
  .news-box {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .content {
    text-align: left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    float: left;
    margin: auto;
    margin-top: 20px;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }
  a:hover{
    color: orangered;
  }

  .pub-time {
    float: right;
    text-align: right;
    padding: 10px;
  }
</style>
