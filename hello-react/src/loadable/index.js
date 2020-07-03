/*
 * @Author: tim
 * @Date: 2020-07-03 15:55:14
 * @LastEditors: tim
 * @LastEditTime: 2020-07-03 16:18:35
 * @Description: 通过 react-loadable 加载的文件，打包时会生成独立的文件
 */ 
import Loadable from 'react-loadable';
import Loading from './Loading';

export default function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 200,
    timeout: 10000,
  }, opts));
};