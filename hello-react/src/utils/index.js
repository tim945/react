/*
 * @Author: tim
 * @Date: 2020-06-18 14:13:52
 * @LastEditors: tim
 * @LastEditTime: 2020-06-18 15:03:17
 * @Description: 
 */ 

 const storage = window.localStorage
 const prefix = 'comment_'

 export function setStorage(key, value) {
  storage.setItem(prefix + key, value)
 }

 export function getStorage(key) {
  return storage.getItem(prefix + key)
 }

