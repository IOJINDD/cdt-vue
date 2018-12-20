import router from './router'

router.beforeEach((to, from, next) => {

  // 设置页面标题
  document.title = to.meta.title
  next()
})

router.afterEach(() => {

})
