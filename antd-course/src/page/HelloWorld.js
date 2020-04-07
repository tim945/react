/*
 * @Author: tim
 * @Date: 2020-04-06 17:10:12
 * @LastEditors: tim
 * @LastEditTime: 2020-04-07 11:25:35
 * @Description: 
 */
import React, { useState } from 'react';
import { Card } from 'antd';

export default () => {
  // return <div>hello world</div>;

  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };

  const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];  

  const contentList = {
    tab1: <Card.Meta
            avatar={<img 
              alt=""
              style={{ width: '64px', height: '64px', borderRadius: '32px' }}
              src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            />}
            title="Alipay"
            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
          />,
    tab2: 'content2'
  }

  const [key, setKey] = useState('tab1');

  const onTabChange = (key) => {    
    setKey(key);
  };

  return (
    <Card 
      style={style} 
      actions={[<a>操作一</a>, <a>操作二</a>]} 
      tabList={tabList}
      activeTabKey={key}
      onTabChange={key => {
        onTabChange(key);
      }}
    >
      {/* <Card.Meta
        avatar={<img 
          alt=""
          style={{ width: '64px', height: '64px', borderRadius: '32px' }}
          src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
        />}
        title="Alipay"
        description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
      /> */}

      {contentList[key]}
    </Card>
  );
}
