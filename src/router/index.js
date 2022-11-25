import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import resourceManage1 from '../views/ResourceManager1View.vue'
import resourceManage2 from '../views/ResourceManager2View.vue'
import announcementManager from '../views/AnnouncementManagerView.vue'
import gameItemManager from '../views/GameItemManagerView.vue'
import gameActivityManager from '../views/GameActivityManagerView.vue'
import GameStoreManager from '../views/GameStoreManagerView.vue'
import GamePointMatchManager from '../views/GamePointMatchManagerView.vue'
import GamePassSetting from '../views/GamePassSettingView.vue'
import GameItemList from '../views/GameItemListsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listing',
    name: 'listing',
    // route level code-splitting
    // this generates a separate chunk (listing.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "listing" */ '../views/ListingView.vue')
    }
  },
  {
    path: '/resourceManage1',
    name: 'resourceManage1',
    component: resourceManage1
  },
  {
    path: '/resourceManage2',
    name: 'resourceManage2',
    component: resourceManage2
  },
  {
    path: '/announceManager',
    name: 'announceManager',
    component: announcementManager
  },
  {
    path: '/gameItemManager',
    name: 'gameItemManager',
    component: gameItemManager
  },
  {
    path: '/gameActivityManager',
    name: 'gameActivityManager',
    component: gameActivityManager
  },
  {
    path: '/gameStoreManager',
    name: 'gameStoreManager',
    component: GameStoreManager
  },
  {
    path: '/gamePointMatchManager',
    name: 'gamePointMatchManager',
    component: GamePointMatchManager
  },
  {
    path: '/gamePassSetting',
    name: 'gamePassSetting',
    component: GamePassSetting
  },
  {
    path: '/gameItemList',
    name: 'gameItemList',
    component: GameItemList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
