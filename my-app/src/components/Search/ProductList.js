/*
 * @Author: tim
 * @Date: 2020-03-21 15:53:10
 * @LastEditors: tim
 * @LastEditTime: 2020-03-21 17:05:46
 * @Description: 
 */
import React from 'react';
import ProductCategory from './ProductCategory'
import ProductGoods from './ProductGoods'

class ProductList extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.list.forEach(v => {
      let text = filterText.toLowerCase()
      if (v.name.toLowerCase().indexOf(text) === -1) {
        return;
      }
      if (inStockOnly && !v.stocked) {
        return;
      }
      if (v.category !== lastCategory) {
        rows.push(
          <ProductCategory
            category={v.category}
            key={v.category} 
          />
        );
      }
      rows.push(
        <ProductGoods
          goods={v}
          key={v.name}
        />
      );
      lastCategory = v.category;
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductList
  