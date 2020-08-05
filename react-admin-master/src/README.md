<!--
 * @Author: tim
 * @Date: 2020-08-04 16:40:16
 * @LastEditors: tim
 * @LastEditTime: 2020-08-05 14:45:14
 * @Description: 
--> 
# 页面入口
index.js --> App.js --> ./router/AppRouter(引入路由及页面基本布局) --> ./router/routes.js(通过loadable懒加载component) --> ./pages/page-routes.js (脚本抓取自动生成路由文件)

# 侧边菜单配置
menu.js

# npm run eject 后的配置文件目录
/config/

# 页面基础框架布局
./layouts/frame/index.jsx
左侧菜单，顶部导航, tab标签导航