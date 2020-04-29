/*
 * @Author: tim
 * @Date: 2020-04-29 14:50:38
 * @LastEditors: tim
 * @LastEditTime: 2020-04-29 16:56:10
 * @Description: 
 */
import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

const namespace = 'cards'

const mapStateToProps = (state) => {
  const cardsList = state[namespace].cardsList;
  return {
    cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {    
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryList`,
        payload: {test:'111'}
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps) 
export default class List extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
  ];

  componentDidMount() {
    // dispatch 是只要 connet 就会有的, connect(mapDispatchToProps) 就没有了
    // this.props.dispatch({
    //   type: 'cards/queryList',
    // });
    this.props.onDidMount();
  }

  render() {
    console.log(this.props)
    const { cardsList, cardsLoading } = this.props;

    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
      </div>
    );    
  }
}