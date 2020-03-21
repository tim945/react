/*
 * @Author: tim
 * @Date: 2020-03-21 14:37:48
 * @LastEditors: tim
 * @LastEditTime: 2020-03-21 17:02:31
 * @Description: 
 */
import React from 'react';
import SearchBar from './SearchBar'
import ProductList from './ProductList'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  list = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
    <div>
      <SearchBar 
        filterText={this.state.filterText} 
        inStockOnly={this.state.inStockOnly} 
        onFilterTextChange={this.handleFilterTextChange.bind(this)}
        onInStockChange={this.handleInStockChange.bind(this)}
      />
      <ProductList 
        filterText={this.state.filterText} 
        inStockOnly={this.state.inStockOnly} 
        list={this.list}
      />
    </div>
      
    )
  }
}

export default Search