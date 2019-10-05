import Home from './components/Home.vue'
import Smash from './components/Smash.vue'
import Bracket from './components/Bracket.vue'
import Draft from './components/Draft.vue'
import Test from './components/Test.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/smash', component: Smash},
  { path: '/bracket', component: Bracket},
  { path: '/draft', component: Draft},
  { path: '/test', component: Test}
];

export default routes;