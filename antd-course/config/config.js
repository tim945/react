/*
 * @Author: tim
 * @Date: 2020-04-06 17:07:21
 * @LastEditors: tim
 * @LastEditTime: 2020-04-10 10:57:56
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
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    },
  },
};
