import OtherView from '../../views/OtherView.vue'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'

const otherRouter = [
  {
    path: '/',
    name: 'Other',
    component: OtherView,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  }
]

export { 
  otherRouter
}