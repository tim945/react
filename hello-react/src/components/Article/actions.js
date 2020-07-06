/*
 * @Author: tim
 * @Date: 2020-07-06 18:06:13
 * @LastEditors: tim
 * @LastEditTime: 2020-07-06 18:17:04
 * @Description: 
 */ 
// import * as actionTypes from "./actionTypes"

export const addArticle = article => {
  return {
    type: 'ADD_ARTICLE',
    article
  }
}

export const asyncAddArticle = article => {
  return dispatch => {
    // 异步操作
    setTimeout(() => {
      dispatch(addArticle(article))
    }, 3000)
  }
}