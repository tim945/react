/*
 * @Author: tim
 * @Date: 2020-07-06 18:06:13
 * @LastEditors: tim
 * @LastEditTime: 2020-07-08 15:12:31
 * @Description: 
 */ 
// import * as actionTypes from "./actionTypes"

export const addArticle = article => {
  return {
    type: 'ADD_ARTICLE',
    article
  }
}

// https://www.redux.org.cn/docs/api/applyMiddleware.html
export const asyncAddArticle = article => {
  // 控制反转！
  // 返回一个接收 `dispatch` 的函数。
  // Thunk middleware 知道如何把异步的 thunk action 转为普通 action
  return dispatch => {
    // 异步操作
    // setTimeout(() => {
    //   dispatch(addArticle(article))
    //   setTimeout(() => {
    //     // 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
    //     // 页面没有DTD，即没指定DOCTYPE时，使用document.body
    //     document.documentElement.scrollTop = document.body.scrollHeight
    //   })
    // }, 3000)

    return new Promise((resolve, reject) => {
      dispatch(addArticle(article))
      setTimeout(() => {
        document.documentElement.scrollTop = document.body.scrollHeight
      }, 3000)
      resolve()
    })

  }
}

// ---------------------------------------------------------------------
// 异步 action
function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce')
}

function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce
  }
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error
  }
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount
  }
}

function makeASandwichWithSecretSauce(forPerson) {
  // 控制反转！
  // 返回一个接收 `dispatch` 的函数。
  // Thunk middleware 知道如何把异步的 thunk action 转为普通 action。

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}

// Thunk middleware 可以让我们像 dispatch 普通 action
// 一样 dispatch 异步的 thunk action。
/* store.dispatch(
  makeASandwichWithSecretSauce('Me')
) */

// 它甚至负责回传 thunk 被 dispatch 后返回的值，
// 所以可以继续串连 Promise，调用它的 .then() 方法。
/* store.dispatch(
  makeASandwichWithSecretSauce('My wife')
).then(() => {
  console.log('Done!')
}) */


// 实际上，可以写一个 dispatch 其它 action creator 里
// 普通 action 和异步 action 的 action creator，
// 而且可以使用 Promise 来控制数据流。

function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (!getState().sandwiches.isShopOpen) {

      // 返回 Promise 并不是必须的，但这是一个很好的约定，
      // 为了让调用者能够在异步的 dispatch 结果上直接调用 .then() 方法。

      return Promise.resolve()
    }

    // 可以 dispatch 普通 action 对象和其它 thunk，
    // 这样我们就可以在一个数据流中组合多个异步 action。

    return dispatch(
      makeASandwichWithSecretSauce('My Grandma')
    ).then(() =>
      Promise.all([
        dispatch(makeASandwichWithSecretSauce('Me')),
        dispatch(makeASandwichWithSecretSauce('My wife'))
      ])
    ).then(() =>
      dispatch(makeASandwichWithSecretSauce('Our kids'))
    ).then(() =>
      dispatch(getState().myMoney > 42 ?
        withdrawMoney(42) :
        apologize('Me', 'The Sandwich Shop')
      )
    )
  }
}

// 这在服务端渲染时很有用，因为我可以等到数据
// 准备好后，同步的渲染应用。
// import { renderToString } from 'react-dom/server'

// store.dispatch(
//   makeSandwichesForEverybody()
// ).then(() =>
//   response.send(renderToString(<MyApp store={store} />))
// )