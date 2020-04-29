/*
 * @Author: tim
 * @Date: 2020-04-29 15:35:25
 * @LastEditors: tim
 * @LastEditTime: 2020-04-29 17:04:56
 * @Description: 
 */
import request from '../util/request';
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace : 'cards',
  state: {
    cardsList: [
      {
        id: 0,
        name : 'umi',
        desc : '极快的类 Next.js 的 React 应用框架',
        url  : 'https://umijs.org'
      }
    ]
  },
  effects: {
    *queryList(_, sagaEffects) {
      debugger
      const listData = [
        {
          id: 1,
          name : 'umi',
          desc : '极快的类 Next.js 的 React 应用框架',
          url  : 'https://umijs.org'
        },
        {
          id: 2,
          name : 'antd',
          desc : '一个服务于企业级产品的设计体系',
          url  : 'https://ant.design/index-cn'
        },
        {
          id: 3,
          name : 'antd-pro',
          desc : '一个服务于企业级产品的设计体系',
          url  : 'https://ant.design/index-cn'
        }
      ];
      const { call, put } = sagaEffects;
      yield call(delay, 3000);
      yield put({ type: 'initList', payload: listData });
    }
  },
  reducers: {
    initList(state, {payload}) {
      const cardsList = [...payload];
      return {
        // ...state,
        cardsList,
      };
    }
  }
};