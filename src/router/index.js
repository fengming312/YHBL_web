import { login } from './login/login'
import { home } from './home/home'

export default new VueRouter({
  routes: [
    login,
    home,
    {
      path: '*',
      redirect: '/'
    },
  ]
})
