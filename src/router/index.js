import { login } from './login/login'

export default new VueRouter({
  routes: [
    login,
    {
      path: '*',
      redirect: '/'
    },
  ]
})
