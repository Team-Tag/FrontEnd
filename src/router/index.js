import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import SignUp from '../views/SignUpView.vue'
import Board from '../views/BoardView.vue'
import LoadMap from '../views/LoadMapView.vue'
import Message from '../views/MessageView.vue'
import Schedule from '../views/ScheduleView.vue'
import FrontEnd from '../views/FrontEnd-LM.vue'
import BackEnd from '../views/BackEnd-LM.vue'
import RoadmapArticle from '../views/RoadmapArticle.vue'
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
    path : '/LoadMap/FrontEnd/RoadmapArticle',
    name : 'FrontRoadmapArticle',
    component : RoadmapArticle,
  },
  {
    path : '/LoadMap/BackEnd',
    name : 'BackEnd',
    component : BackEnd
  },
  {
    path : '/LoadMap/BackEnd/RoadmapArticle',
    name : 'BackendRoadmapArticle',
    component : RoadmapArticle,
  },
  {

    path : '/Message',
    name : 'Message',
    component : Message
  },
  {
    path : '/Schedule',
    name : 'Schedule',
    component : Schedule
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
