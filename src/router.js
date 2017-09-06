module.exports = function (router) {
    router.map({
      '/': {
          name: 'home',
          component: require('./views/home.vue')
      },
      '/home': {
          name: 'home',
          component: require('./views/home.vue')
      },
        '/about': {
            name: 'about',
            component: require('./views/about.vue')
        },
        '/test': {
            name: 'about',
            component: require('./views/test.vue')
        }
    })
}
