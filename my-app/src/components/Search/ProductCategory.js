/*
 * @Author: tim
 * @Date: 2020-03-21 15:40:12
 * @LastEditors: tim
 * @LastEditTime: 2020-03-21 16:37:21
 * @Description: 
 */
import React from 'react';

export default class ProductCategory extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    )
  }
}