import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入主页组件
import Home from '../views/Home/Home.vue'
  import Home1 from '../views/Home/Home1.vue'
  import Home2 from '../views/Home/Home2.vue'
  import Home3 from '../views/Home/Home3.vue'

// 导入创作组件
import Create from '../views/Create/Create.vue'

// 导入设置组件
import Setting from '../views/Setting/Setting.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

  const routes = [
    // 主页路由配置
    {
      path:'/home',
      component: Home,
      redirect: '/home/home1', // 地址栏输入/home重定向到/home/home1
      children:[
        {
          path:'/home/home1',
          component: Home1
        },
        {
          path:'/home/home2',
          component: Home2
        },
        {
          path:'/home/home3',
          component: Home3
        }
      ]
    },
    // 创作路由配置
    {
      path:'/create',
      component: Create
    },
    // 设置路由配置
    {
      path:'/setting',
      component: Setting
    },
    {
      path:'/',
      redirect:'/home' // 地址栏输入/ 重定向到/home
    }

]

const router = new VueRouter({
  routes
})

export default router
