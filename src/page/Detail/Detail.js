import React from 'react';
import "./index.less";
import Header from '../../../src/components/Header/Header'
export default class Detail extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props);
        return (
            <div className='full profile'>
                <Header>详情</Header>
                <div className="big">
                    <div className="contain">
                        <img src={this.props.location.state["imgB"]} alt=""/>
                        <div className="detail">
                        <span className="title">
                            {this.props.location.state["describe"]}
                        </span>
                            <p className="name">{this.props.location.state["title"]}</p>
                            <div className="price">
                            <span className="price">
                                {this.props.location.state["price"]}
                            </span>
                                <span className="num">
                                 {this.props.location.state["sold"]}
                            </span>
                            </div>
                            <div className="time">
                                <ul>
                                    <li>产地中国</li>
                                    <li>次日达</li>
                                    <li>实付满69包邮</li>
                                </ul>
                            </div>

                        </div>
                        <div className="vip">
                            <div className="vip1">
                                <span><i className="iconfont icon-huiyuan"></i></span>
                                <div className="middle">
                                    <p>支付8元开会员</p>
                                    <p>购买本商品更返
                                        <span>1.99</span>
                                        元</p>
                                </div>
                                <div className="right">
                                    去开通 >
                                </div>

                            </div>
                            <div className="vip1 vip2">
                                <span><i className="iconfont icon-hongbao"></i></span>
                                <div className="middle">

                                    <p>
                                        <span>分享有机会得30元红包</span>
                                    </p>
                                </div>
                                <div className="right">
                                    去分享 >
                                </div>

                            </div>
                            <p className="share">已经有681人分享了该商品</p>
                        </div>
                        <div className="buyer">
                            <div className="head">
                                <img src="http://img4.imgtn.bdimg.com/it/u=142124129,2048260163&fm=27&gp=0.jpg" alt=""/>
                                <div className="name">买家</div>
                                <div className="focus">
                                    <span>关注 +</span>
                                </div>
                            </div>
                            <div className="buyer-p">
                                <p className="buyer-p1">专注国内外水果9年，去新疆，海南，台湾实地考察，只选当季的新鲜水果给你。</p>
                                <div className="buyer-say" >
                                    <p className='dot'>“</p>
                                    <p className='buyer-detail'>丑柑的丑虽然显而易见，但它的酸甜口感吃过的人都懂。来自天府之国四川蒲江的丑柑，引山泉水灌溉。丑柑的皮非常好剥，虽然外表皱褶很多，内心的果肉却是可口多汁、清新不腻，是回购率颇高的水果。拨开果皮后，汁水丰富，满满地都是果粒
                                    </p>
                                    <p className="p-foot">果香浓郁沁人，只是咬上一口就被深深征服</p>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
                <div className="footer">
                    <i className="iconfont icon-gouwuche"></i>
                    <p>加入购物车</p>
                </div>
            </div>
        )
    }
}


