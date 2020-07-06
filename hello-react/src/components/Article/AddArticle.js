/*
 * @Author: tim
 * @Date: 2020-07-06 14:52:06
 * @LastEditors: tim
 * @LastEditTime: 2020-07-06 15:29:42
 * @Description: 
 */ 
import React, { useState } from "react"
// import "./AddArticle.css"

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState()

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = e => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    // onSubmit={addNewArticle}
    <form className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button onClick={ addNewArticle }>Add article</button>
    </form>
  )
}
export default AddArticle