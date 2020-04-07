/*
 * @Author: tim
 * @Date: 2020-04-07 14:04:44
 * @LastEditors: tim
 * @LastEditTime: 2020-04-07 14:40:38
 * @Description: 
 */
import React, { useState } from 'react';
import { Tree } from 'antd';

export default class MyTree extends React.Component {
  state = {
    expandedKeys: []
  }

  // 接收原本的展开事件，在 state 中记录 expandedKeys
  onExpand = (expandedKeys) => {
    console.log(expandedKeys)
    this.setState({ expandedKeys });
  }

  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];
    console.log(selectedKeys)
    
    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }

  render() {
    const { TreeNode } = Tree;
    
    return (
      <Tree 
        checkable
        expandedKeys={this.state.expandedKeys}
        selectedKeys={[]}
        onExpand={this.onExpand}
        onSelect={this.onSelect}      
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf" key="0-0-0" />
          <TreeNode title="leaf" key="0-0-1" />
        </TreeNode>        
      </Tree>
    )
  }
}