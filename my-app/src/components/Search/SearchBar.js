/*
 * @Author: tim
 * @Date: 2020-03-21 14:55:49
 * @LastEditors: tim
 * @LastEditTime: 2020-03-21 17:02:11
 * @Description: 
 */
import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  // 过滤
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  // stock
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked)
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          value={this.props.filterText} 
          onChange={(e) => this.handleFilterTextChange(e)}
        />
        <p>
          <label>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={(e) => this.handleInStockChange(e)}
            />
            {' '}
            Only show products in stock
          </label>
        </p>
      </form>
    )
  }
}
