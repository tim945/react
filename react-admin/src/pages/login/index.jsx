import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Input, Button, Form} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';   // 引入图标
import {setLoginUser, toHome} from 'src/commons';
import config from 'src/commons/config-hoc';
import Banner from './banner/index';
import './style.less';

// 装饰器(Decorator)语法，只要Decorator后面是Class，默认就已经把Class当成参数隐形传进Decorator了
@config({
    path: '/login',
    ajax: true,
    noFrame: true,
    noAuth: true,
})
export default class extends Component {
    state = {
        loading: false,
        message: '',
        isMount: false,
    };

    componentDidMount() {
        // 开发时方便测试，填写表单
        if (process.env.NODE_ENV === 'development' || process.env.BASE_NAME === '/react-admin-live') {
            this.form.setFieldsValue({userName: 'admin', password: '111'});
        }

        setTimeout(() => this.setState({isMount: true}), 300);
    }

    handleSubmit = (values) => {
        if (this.state.loading) return;

        this.setState({
            loading: true
        });

        // debugger; return;

        const {userName, password} = values;
        const params = {
            userName,
            password,
        };

        setLoginUser({
            id: params.userName,
            name: params.userName,
        });
        // toHome();

        setTimeout(() => {
            this.setState({
                loading: false
            });
            toHome(); 
        }, 3000)

        /*
        this.setState({loading: true, message: ''});
        this.props.ajax.post('/mock/login', params, {errorTip: false})
            .then(res => {
                const {id, name} = res;
                setLoginUser({
                    id,
                    name,
                });
                toHome();
            })
            .catch(() => this.setState({message: '用户名或密码错误！'}))
            .finally(() => this.setState({loading: false}));
        */
    };

    render() {
        const {loading, message, isMount} = this.state;
        const formItemStyleName = isMount ? 'form-item active' : 'form-item';

        return (
            <div styleName="root" className="login-bg">
                <Helmet title="欢迎登陆"/>  
                {/* 管理对文档头的所有更改 
                <Helmet>
                    <meta charSet='utf-8' />
                    <title>{title}</title>
                    <meta name='keywords' content={title} />
                </Helmet> */}
                {/* 特性：
                1，支持所有有效的头标签，title base meta link script noscript style
                2，支持body html title标签的属性
                3，支持服务端渲染
                4，嵌套组件重写重复的头改变 */}
                <div styleName="left">
                    <Banner/>
                </div>
                <div styleName="right">
                    <div styleName="box">
                        <Form
                            ref={form => this.form = form}
                            name="login"
                            className='inputLine'
                            onFinish={this.handleSubmit}
                        >
                            <div styleName={formItemStyleName}>
                                <div styleName="header">欢迎登录</div>
                            </div>
                            <div styleName={formItemStyleName}>
                                <Form.Item
                                    name="userName"
                                    rules={[{required: true, message: '请输入用户名'}]}
                                >
                                    <Input allowClear autoFocus prefix={<UserOutlined />} placeholder="用户名"/>
                                </Form.Item>
                            </div>
                            <div styleName={formItemStyleName}>
                                <Form.Item
                                    name="password"
                                    rules={[{required: true, message: '请输入密码'}]}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="密码"/>
                                </Form.Item>
                            </div>
                            <div styleName={formItemStyleName}>
                                <Form.Item shouldUpdate={true} style={{marginBottom: 0}}>
                                    {() => (
                                        <Button
                                            styleName="submit-btn"
                                            loading={loading}
                                            type="primary"
                                            htmlType="submit"
                                            disabled={
                                                !this.form?.isFieldsTouched(true) ||
                                                this.form?.getFieldsError().filter(({errors}) => errors.length).length
                                            }
                                        >
                                            登录
                                        </Button>
                                    )}
                                </Form.Item>
                            </div>
                        </Form>
                        <div styleName="error-tip">{message}</div>
                    </div>
                </div>
            </div>
        );
    }
}

