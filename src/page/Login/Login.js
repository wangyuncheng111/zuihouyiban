import React, { Component } from 'react';
import Header from 'src/components/Header/Header';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Login extends Component {
    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }
    render() {
        return (<div className="full login">
            <Header>登陆</Header>
            <ul className="box-list">
                <li>

                    <input type="text" placeholder='输入你的小名，老铁' ref={this.username}/>
                </li>
                <li>

                    <input type="password" placeholder='管好你的眼，小鬼' ref={this.password}/>
                </li>
                <li>
                    <button onClick={()=>{
                        this.props.setLogin({
                            username:this.username.current.value,
                            password:this.password.current.value
                        });
                    }}>登录</button>
                </li>
                <li>
                    <Link to="/reg">注册</Link>
                </li>
                <span>为方便您下次登陆，请记住您的密码</span>
            </ul>
        </div>)
    }
}
export default connect(state=>state.session,actions)(Login);