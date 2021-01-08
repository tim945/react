/*
 * @Author: tim
 * @Date: 2020-12-29 14:22:08
 * @LastEditors: tim
 * @LastEditTime: 2020-12-29 15:13:54
 * @Description:
 */
import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// export default function WrapComp() {
// ……
// } 

const WrapComp = ({ history, location, match }) => {
  const handleClick = (e) => {
    console.log(e, history, location, match)
    history.go(-1);
  }

  return (
    <div>
      <span onClick={handleClick}>
        掘土社区
      </span>
      <li>
        <NavLink to="/" exact>
          首页
        </NavLink>
      </li>
      <li>
        <NavLink to='/game'>动态</NavLink>
      </li>
      <li>
        <NavLink to="/faq/who">话题</NavLink>
      </li>
      <li>
        <NavLink to="/faq/what">登录</NavLink>
      </li>
    </div>
  ); 
}

// class WrapComp extends React.Component {
//   handleClick = () => {
//     // Route 的 三个对象将会被放进来, 对象里面的方法可以被调用
//     console.log(this.props);
//     this.props.history.push({
//       pathname:'/',
//       // state:{id:4567},
//       query:{id:4567},
//     })
//   };
//   render() {
//     return (
//       <div>
//         <span onClick={this.handleClick}>
//           掘土社区
//         </span>
//         <li>
//           <NavLink to="/" exact>
//             首页
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/game'>动态</NavLink>
//         </li>
//         <li>
//           <NavLink to="/faq/who">话题</NavLink>
//         </li>
//         <li>
//           <NavLink to="/faq/what">登录</NavLink>
//         </li>
//       </div>
//     );
//   }
// }

// 导出的是 withRouter(Nav) 函数执行
export default withRouter(WrapComp);
