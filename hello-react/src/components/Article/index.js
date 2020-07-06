/*
 * @Author: tim
 * @Date: 2020-07-06 15:08:35
 * @LastEditors: tim
 * @LastEditTime: 2020-07-06 18:30:38
 * @Description: 
 */ 
import React, { useState } from "react"
import { connect } from "react-redux"
import Article from "./Article"
import AddArticle from "./AddArticle"
import {addArticle, asyncAddArticle} from "./actions"

const Articles = ({ articles, saveArticle }) => {
  // const [articles, setArticles] = useState([
  //   { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  //   { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  // ])

  // const saveArticle = article => {
  //   setArticles([...articles, article])
  // }

  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // saveArticle: article =>
      // dispatch({ type: 'ADD_ARTICLE', article }),   // type值，可通过创建新的文件，统一管理：import * as actionTypes from "./actionTypes"
    
    // saveArticle: article => dispatch(addArticle(article)),  

    saveArticle: article => dispatch(asyncAddArticle(article)), // 需使用中间件 redux-thunk
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
