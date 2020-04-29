/*
 * @Author: tim
 * @Date: 2020-04-10 09:58:23
 * @LastEditors: tim
 * @LastEditTime: 2020-04-29 12:02:50
 * @Description: 
 */
// import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const response = await fetch(url, options);
  try {
    checkStatus(response);
  } catch (e) {
    console.log(e)
  }
  return await response.json();
}
