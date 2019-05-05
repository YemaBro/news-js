<template>
  <div>
    <h1>网络关键词热度获取</h1>
    <ViewRank/>
    <News/>
  </div>
</template>

<script>
import News from '../components/News.vue'
import ViewRank from '../components/ViewRank'

export default {
  name: 'home',
  components: {
    News,
    ViewRank
  }
}
</script>

<style>

</style>
