/*
 * @Author: tim
 * @Date: 2020-04-06 17:07:21
 * @LastEditors: tim
 * @LastEditTime: 2020-04-06 17:51:52
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
  routes: [{
    path: '/',
    component: './HelloWorld',
  }],
};
