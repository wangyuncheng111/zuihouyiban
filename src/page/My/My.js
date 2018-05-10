import React from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class My extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="header-home">
                <div className="header-module">
                    <div className="header-title">
                        <button className="btn"><Link to="/login">用户登录</Link></button>
                        <div className="home-total">
                            <li>
                                <i>0</i>元<br/>
                                <span className="binding">
                            余额 · 储值
                        </span>
                                <span className="header-img"></span>
                            </li>
                            <li >
                                <b>张</b>
                                <span className="binding">
                            红包
                        </span>
                            </li>
                            <li >
                                <b>张</b>
                                <span className="binding">
                            商品券
                        </span>
                            </li>
                            <li>
                                <b>分</b>
                                <span className="binding">
                           积分兑换>
                        </span>
                            </li>
                        </div>
                        <div className="member-equity">
                            <div className="member-equity-link">
                                <h4>会员权益</h4>
                                <span>开通会员 > </span>
                            </div>
                            <p className="member-equity-txt">
                                成为优享会员，预计1年将为你
                                <i>节省1121.30元</i>
                            </p>
                        </div>
                        <div className="scroll">
                            <li>
                                <span className="scroll-img img1"></span>
                                <p>购物返现5%</p>
                            </li>
                            <li>
                                <span className="scroll-img img2"></span>
                                <p>会员专享价</p>
                            </li>
                            <li>
                                <span className="scroll-img img3"></span>
                                <p>1小时送达</p>
                            </li>
                            <li>
                                <span className="scroll-img img4"></span>
                                <p>专属红包</p>
                            </li>
                            <li>
                                <span className="scroll-img img5"></span>
                                <p>专属客服</p>
                            </li>
                            <li>
                                <span className="scroll-img img6"></span>
                                <p>敬请期待</p>
                            </li>
                        </div>
                        <div className="invite-and-task">
                            <div className="wrap-mask"></div>
                            <div className="mine-task"></div>
                        </div>
                        <div className="home-list">
                            <div className="home-item">
                                <p>账户与安全</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>我的订单</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>我的地址</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>下载每日优鲜APP</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>客服与帮助</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>意见反馈</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>消息</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>关于我们</p>
                                <span></span>
                            </div>
                            <div className="home-item">
                                <p>
                                    设置</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




