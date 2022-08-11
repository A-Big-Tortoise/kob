import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import NotFound from '../views/error/NotFound'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'


const routes = [
  {
    path: "/",
    nama: "home",
    redirect: "/pk/"
  },

  {
    path: "/pk/",
    name: "pk_index",
    component: PKIndexView,
  },

  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
  },

  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
  },
  {
    path: "/user/bot/",
    name: "userbot_index",
    component: UserBotIndexView,
  },
  
  {
    path: "/404/",
    name: "error_index",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
