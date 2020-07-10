/*
 * @Author: tim
 * @Date: 2020-07-06 14:52:06
 * @LastEditors: tim
 * @LastEditTime: 2020-07-10 11:00:38
 * @Description: 
 */ 
import React, { useState, useEffect } from "react"
// import "./AddArticle.css"

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState()
  const [count, setCount] = useState(0);

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = e => {
    e.preventDefault()
    setCount(count+1);  // 保存点击数
    saveArticle(article)
  }

  // 相当于 componentDidMount 和 componentDidUpdate:
  // useEffect(() => {
  //   // 使用浏览器的 API 更新页面标题
  //   count && (document.title = `You clicked ${count} times`);   // 有条件执行
  // });

  // 有条件渲染
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新

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