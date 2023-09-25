export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/category/index',
    'pages/cart/index',
  ],
  tabBar:{
    list:[
      {
        'pagePath': 'pages/index/index',
        'text': '首页',
        'iconPath': './assets/images/tabs/home_default.png',
        'selectedIconPath':'./assets/images/tabs/home_selected.png',
      },
      {
        'pagePath': 'pages/category/index',
        'text': '分类',
        'iconPath':'./assets/images/tabs/category_default.png',
        'selectedIconPath':'./assets/images/tabs/category_selected.png'
      },
      {
        'pagePath': 'pages/cart/index',
        'text': '购物车',
        'iconPath':'./assets/images/tabs/cart_default.png',
        'selectedIconPath':'./assets/images/tabs/cart_selected.png'
      },
      {
        'pagePath': 'pages/user/index',
        'text': '我的',
        'iconPath':'./assets/images/tabs/user_default.png',
        'selectedIconPath':'./assets/images/tabs/user_selected.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
