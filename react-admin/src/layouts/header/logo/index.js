/*
 * @Author: tim
 * @Date: 2020-06-28 11:27:59
 * @LastEditors: tim
 * @LastEditTime: 2020-07-01 17:19:00
 * @Description: 
 */ 
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
import './style.less';

export const PAGE_ROUTE = '/logo';

export default class Logo extends Component {
    static propTypes = {
        min: PropTypes.bool,
    };
    static defaultProps = {
        logo: logo,
        title: 'Admin',
        min: false,
    };

    render() {
        const {min, title, ...others} = this.props;
        return (
            <div styleName="logo">
                <img src={logo} alt="logo"/>
                <h1 {...others} className={min ? 'title-hide' : ''}>{title}</h1>
            </div>
        );
    }
}
