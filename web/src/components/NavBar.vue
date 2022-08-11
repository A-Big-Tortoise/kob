
<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <!-- 点击a标签会重载页面，routerlink后标签会被vue监听，跳转连接时不会刷新页面 -->
    <a class="navbar-brand" href="/">King of Bots</a>
    <!-- <router-link  class="navbar-brand" :to = "{name: 'home'}">King of Bots</router-link> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="/pk/">对战</a> -->
          <router-link :class="route_name == pk_index ?' nav-link active' : 'nav-link'" :to="{name: 'pk_index'}">对战</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/record/">对局列表</a> -->
          <router-link :class="route_name == record_index ? 'nav-link active': 'nav-link'" :to="{name: 'record_index'}">对局列表</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/ranklist/">排行榜</a> -->
          <router-link :class="route_name == ranklist_index? 'nav-link active': 'nav-link'" :to="{name: 'ranklist_index'}">排行榜</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jiayu Chen
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> 
              <router-link class="dropdown-item" :to="{name: 'userbot_index'}">my bot</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">exit</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>

<script>
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
  setup() {
    const route = useRoute()
    let route_name = computed(() => route.name)
    return {
      route_name
    }
  }
}
</script>



<!-- 使得这个样式不会影响到组件以外 -->
<style scoped>


</style>