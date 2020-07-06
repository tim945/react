/*
 * @Author: tim
 * @Date: 2020-07-06 14:50:43
 * @LastEditors: tim
 * @LastEditTime: 2020-07-06 15:00:35
 * @Description: 
 */ 
import React from "react"
// import "./Article.css"

const Article = ({ article }) => (
  <div className="article">
    <h1>{article.title}</h1>
    <p>{article.body}</p>
  </div>
)

export default Article