/*
 * @Author: tim
 * @Date: 2020-07-06 15:08:35
 * @LastEditors: tim
 * @LastEditTime: 2020-07-08 10:34:42
 * @Description: 
 */ 
import React, { Component, useState } from "react"
import { connect } from "react-redux"
import Article from "./Article"
import AddArticle from "./AddArticle"
import {addArticle, asyncAddArticle} from "./actions"

const Articles = ({ articles, saveArticle, dispatch }) => {
  // const [articles, setArticles] = useState([
  //   { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  //   { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  // ])

  // const saveArticle = article => {
  //   setArticles([...articles, article])
  // }

  // 当 connect mapDispatchToProps 时，this.props.dispatch 为 undefined，即不存在
  console.log(dispatch) 
  
  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

/* class Articles extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // 当 connect mapDispatchToProps 时，this.props.dispatch 为 undefined，即不存在
    console.log(this.props.dispatch)  
  }

  render() {
    const { saveArticle, articles } = this.props
    return (
      <div>
        <AddArticle saveArticle={saveArticle} />
        {articles.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    )
  }
} */

// const mapStateToProps = state => {
//   return {
//     articles: state.articles,
//   }  
// }
const mapStateToProps = state => ({
  articles: state.articles,
})


const mapDispatchToProps = dispatch => {
  return {
    // saveArticle: article =>
      // dispatch({ type: 'ADD_ARTICLE', article }),   // type值，可通过创建新的文件，统一管理：import * as actionTypes from "./actionTypes"
    
    // saveArticle: article => dispatch(addArticle(article)),  
    
    // https://www.redux.org.cn/docs/api/applyMiddleware.html
    // redux-thunk 支持 dispatch function，以此让 action creator 控制反转。
    // 被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它。
    // 这类的 function 就称为 thunk。
    saveArticle: article => dispatch(asyncAddArticle(article)), // 需使用中间件 redux-thunk
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
