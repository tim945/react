/*
 * @Author: tim
 * @Date: 2020-03-21 15:40:12
 * @LastEditors: tim
 * @LastEditTime: 2020-03-21 16:52:12
 * @Description: 
 */
import React from 'react';

export default class ProductGoods extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { name, price, stocked } = this.props.goods

    if (stocked === false) {
      name = <span style={{color: 'red'}}>{name}</span> 
    }

    return (
      <tr>
        <th>
          <td>{name}</td>
          <td>{price}</td>
        </th>
      </tr>
    )
  }
}