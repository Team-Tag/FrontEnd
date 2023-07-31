import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import SignUp from '../views/SignUpView.vue'
import Board from '../views/BoardView.vue'
import LoadMap from '../views/LoadMapView.vue'
import Schedule from '../views/ScheduleView.vue'
import FrontEnd from '../views/FrontEnd-LM.vue'
import BackEnd from '../views/BackEnd-LM.vue'
import EditBoard from '../views/EditBoard.vue'
import ArticleView from '../views/ArticleView.vue'
import EditBoard2 from '../views/EditBoard2.vue'
import EditBoard3 from '../views/EditBoard3.vue'
import RoadmapArticle_Front from '../views/RoadmapArticle_Front.vue'
import RoadmapArticle_Back from  '../views/RoadmapArticle_Back.vue'
import ShowWorks from '../views/ShowWorks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component : SignUp
  },
  {
    path : '/Board',
    name : 'Board',
    component : Board
  },
  {
    path : '/Board/Article',
    name : 'Article',
    component : ArticleView
  },
  {
    path : '/LoadMap',
    name : 'LoadMap',
    component : LoadMap
  },
  {
    path : '/ShowWorks',
    name : 'ShowWorks',
    component : ShowWorks
  },
  {
    path : '/LoadMap/FrontEnd',
    name : 'FrontEnd',
    component : FrontEnd
  },
  {

    path : '/Board/EditBoard',
    name : 'EditBoard',
    component : EditBoard,
  },
  {
    path : '/LoadMap/FrontEnd/RoadmapArticle_Front',
    name : 'FrontRoadmapArticle',
    component : RoadmapArticle_Front,

  },
  {
    path : '/LoadMap/BackEnd',
    name : 'BackEnd',
    component : BackEnd
  },
  {
    path : '/LoadMap/BackEnd/RoadmapArticle_Back',
    name : 'BackendRoadmapArticle',
    component : RoadmapArticle_Back,
  },
  {
    path : '/Schedule',
    name : 'Schedule',
    component : Schedule
  },
  {
    path : '/EditBoard2',
    name : 'EditBoard2',
    component : EditBoard2
  },
  {
    path : '/EditBoard3',
    name : 'EditBoard3',
    component : EditBoard3
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
