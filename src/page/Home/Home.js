import React from 'react';

import './index.less';

import {connect} from 'react-redux';
import actions from "src/store/actions/home";
import HomeSwiper from './HomeSwiper';
import {loadMore, pullRefresh} from '../../common/util';
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor() {
        super();
        this.content = React.createRef();
        this.shopping = React.createRef();
        this.gouwu = React.createRef();
        this.state = {number: 0}
    }

    chooseLesson = (val) => {
        //将当前的课程存入到redux中
        this.props.setLesson(val)
    };

    componentDidMount() {
        if (this.props.setSlider.length === 0) {
            this.props.setSlider();
        }
        this.props.setFruitsList();
        loadMore(this.content.current, this.loadMore);
        pullRefresh(this.content.current, this.props.refresh);
    }

    handleClick = () => {
        console.log(this.shopping.current.style);
        this.setState({number: this.state.number + 1});
        console.log(this.state.number);
        if (this.state.number > -1) {
            this.shopping.current.style.display = 'none';
            this.gouwu.current.style.display = 'block';
        }
    };
    handleMinus = () => {
        if (this.state.number > 0) {
            this.setState({number: this.state.number - 1})
        } else {
            this.setState({number: 0});
        }
        if (this.state.number < 2) {
            this.gouwu.current.style.display = 'none';
            this.shopping.current.style.display = 'block';
        }
    };
    handleAdd = () => {
        this.setState({number: this.state.number + 1})
    };

    render() {
        return (
            <div className='home full'>
                <div className="title">
                    <div className="address">
                        <img src="https://j-image.missfresh.cn/img_20161026155900764.png" alt=""/>
                        昌宁大厦
                    </div>
                    <i className="iconfont icon-suosou sousuo"></i>
                </div>
                <div className="nav swiper-container">
                    <div className="swiper-wrapper nav-list">
                        <div className="swiper-slide nav-list-item">热卖</div>
                        <div className="swiper-slide nav-list-item">水果</div>
                        <div className="swiper-slide nav-list-item">蔬菜</div>
                        <div className="swiper-slide nav-list-item">乳品</div>
                        <div className="swiper-slide nav-list-item">肉蛋</div>
                        <div className="swiper-slide nav-list-item">零食</div>
                        <div className="swiper-slide nav-list-item">热卖</div>
                        <div className="swiper-slide nav-list-item">水果</div>
                        <div className="swiper-slide nav-list-item">蔬菜</div>
                        <div className="swiper-slide nav-list-item">乳品</div>
                        <div className="swiper-slide nav-list-item">肉蛋</div>
                        <div className="swiper-slide nav-list-item">零食</div>
                    </div>
                    <i className="iconfont icon-ai-module module"></i>
                </div>
                <div className='content' ref={this.content}>
                    {this.props.slider.lists.length > 0 ?
                        <HomeSwiper
                            lists={this.props.slider.lists}
                        /> : <div>正在加载中...</div>}
                    <div className="hot"><img
                        src="https://image.missfresh.cn/category_group_images/9C4AA17328E11D63114D767A15DA6852.PNG"
                        alt=""/></div>
                    <div className='home-list'>
                        {this.props.fruits.lists.map((item, index) => (

                            <div key={index} className="content-list-item">
                                <Link to={{pathname:'/detail'}}>
                                    <div className="item-img">
                                        <div className="item-img-left">
                                            <img src={item.imgB} alt=""/>
                                        </div>
                                        <div className="item-img-big">
                                            <img src={item.imgS} alt=""/>
                                        </div>
                                    </div>

                                    <div className="list-detail">
                                        <span className="detail-title">{item.title}</span>
                                        <span className="detail-describe">{item.describe}</span>
                                        <span className="detail-text">{item.text}</span><br/>
                                        <span className="detail-price">{item.price}</span>
                                        <i ref={this.shopping} className="iconfont icon-gouwuche icon"
                                           onClick={this.handleClick}></i>
                                        <div ref={this.gouwu} className="gouwu">
                                            <button className="left-button" onClick={this.handleMinus}>-</button>
                                            {Math.max(0, this.state.number)}
                                            <button className="right-button" onClick={this.handleAdd}>+</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home)

