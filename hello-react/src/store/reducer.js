/*
 * @Author: tim
 * @Date: 2020-07-06 15:43:57
 * @LastEditors: tim
 * @LastEditTime: 2020-07-30 14:24:57
 * @Description: 
 */ 

const initialState = {
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      debugger
      const { article } = action
      const newArticle = {
        id: Math.random(), // not really unique but it's just an example
        // title: action.article.title,
        // body: action.article.body,
        ...article
      }
      return {
        ...state, // 原state解构
        articles: state.articles.concat(newArticle),
      }   
    // default:
      // return state  
  }
  return state
}
export default reducer
