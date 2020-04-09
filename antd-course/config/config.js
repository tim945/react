/*
 * @Author: tim
 * @Date: 2020-04-06 17:07:21
 * @LastEditors: tim
 * @LastEditTime: 2020-04-09 09:42:41
 * @Description: 
 */
export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
    }],
  ],
  // routes: [
  //   {
  //     path: '/',
  //     component: './HelloWorld',
  //   }, 
  //   {
  //     path: '/tree',
  //     component: './MyTree',
  //   }
  // ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'Helloworld',
      },
      {
        path: '/helloworld',
        component: 'Helloworld'
      },
      { path: '/puzzlecards', component: './puzzlecards' },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          // { path: 'analysis', component: 'Dashboard/Analysis' },
          // { path: 'monitor', component: 'Dashboard/Monitor' },
          // { path: 'workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
};
