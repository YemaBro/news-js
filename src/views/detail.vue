<template>
    <div class="detail-page">
        <el-row class="article">
            <el-col :span="24" class="article-baseInfo">
                <div  class="title"><a :href="BodyData.vurl" target="_blank">{{BodyData.title}}</a></div>
                <span class="time">{{BodyData.update_time}}</span>
                <!--<span class="source">{{BodyData.vurl}}</span>-->
                <span class="view-count">阅读量：{{BodyData.view_count}}</span>
            </el-col>
            <el-col :span="24" class="tags">
                <span v-for="(item, index) in BodyData.tags" :key="`index${index}`">{{item}}</span>
            </el-col>
            <el-col :span="24" class="article-content">{{BodyData.intro}}</el-col>
            <el-col :span="24" class="echart">
                <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'detail',
  data () {
    return {
      BodyData: [],
      HotwordsData: [],
      key: [],
      value: []
    }
  },
  created () {
    console.log(this.$route.query.id)
  },
  mounted () {
    this.$axios.get(`/api/tencentnews/detail/${this.$route.query.id}`).then(res => {
      this.BodyData = res.data.res_body
      this.HotwordsData = res.data.hot_words
      Object.keys(this.HotwordsData).forEach(key => {
        this.key.push(key)
        this.value.push(this.HotwordsData[key])
      })
      this.drawLine()
    })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '关键词' },
        tooltip: {},
        xAxis: {
          data: this.key
        },
        yAxis: {},
        series: [{
          name: 'TFIDF',
          type: 'bar',
          data: this.value
        }]
      })
    }
  }
}
</script>

<style scoped>
    .title {
        margin: 0 0 15px;
        font-size: 32px;
    }
    .article-baseInfo span {
        margin-left: 12px;
        font-size: 16px;
        color: #777676;
    }
    .detail-page{
        display: flex;
        justify-content: center;
        background: #fff;
    }
    .article {
        padding: 50px 50px 35px;
        width: 80%;
        border-radius: 6px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }
    .tags {
        margin-top: 23px;
        margin-bottom: 35px;
    }
    .tags span {
        margin-left: 20px;
        padding: 6px 10px;
        border-radius: 10px;
        background: #eee;
    }
    .article-content {
        text-align: left;
        text-indent:2em;
        font-size: 18px;
        line-height: 1.5;
        color: #333;
    }
    .echart {
        display: flex;
        margin-top: 70px;
        justify-content: center;
    }
    a {
      color: #2c3e50;
      text-decoration: none;
    }
    a:hover{
      color: orangered;
    }

</style>
