import React from 'react';
import './index.less'
import VipList from './VipList'
export default class Vip extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='vip'>
                <div className='nav-vip'>
                    <div className='nav-vip-title'>开通优享会员 尊享5大特权</div>
                    <img src="https://j-image.missfresh.cn/img_20171101110238591.png" alt="" className='non-back'/>
                    <div className='box-container'>
                        <div className="vip-img-box">
                            <div className='right-box'>
                                <div className='vip-icon'>
                                    <div className='icon-more'>
                                        <div className='icon-item'>
                                            <img src="https://j-image.missfresh.cn/img_20171228155342915.png" alt=""
                                                 className='icon-img'/>
                                            <span className='icon-text'>每单返现5%</span>
                                        </div>
                                        <div className='icon-item'>
                                            <img src="https://j-image.missfresh.cn/img_20171228155342915.png" alt=""
                                                 className='icon-img'/>
                                            <span className='icon-text'>每单返现5%</span>
                                        </div>
                                        <div className='icon-item'>
                                            <img src="https://j-image.missfresh.cn/img_20171228155342915.png" alt=""
                                                 className='icon-img'/>
                                            <span className='icon-text'>每单返现5%</span>
                                        </div>
                                        <div className='icon-item'>
                                            <img src="https://j-image.missfresh.cn/img_20171228155342915.png" alt=""
                                                 className='icon-img'/>
                                            <span className='icon-text'>每单返现5%</span>
                                        </div>
                                        <div className='icon-item'>
                                            <img src="https://j-image.missfresh.cn/img_20171228155342915.png" alt=""
                                                 className='icon-img'/>
                                            <span className='icon-text'>每单返现5%</span>
                                        </div>
                                        <div className='icon-item'>
                                            <img src="https://j-image.missfresh.cn/img_20171228155342915.png" alt=""
                                                 className='icon-img'/>
                                            <span className='icon-text'>每单返现5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://static-as.missfresh.cn/frontend/mfs3/web/static/img/calc-vip.febe8c0.png" alt="" className='calc-info'/>
                        </div>
                    </div>
                </div>
                <div className='invite-box'>
                    <div className='btn-box invite-btn'>
                        <span>免费体验优享会员</span>
                    </div>
                    <div className='btn-box open-vip'>
                        <span>限时8元开通优享会员</span>
                    </div>
                </div>
                <div>
                    <div className="vip-title">
                        <div className="title-box">
                            <div className="main">专属红包周周送</div>
                            <div className="sub">（每周一更新）</div>
                        </div>
                    </div>
                    <div className="redpack-box">
                        <img src="https://j-image.missfresh.cn/img_20180419123447049.png" alt="" className="redpack-img"/>
                        <img src="https://j-image.missfresh.cn/img_20180419123515691.png" alt="" className="redpack-img"/>
                        <img src="https://j-image.missfresh.cn/img_20180419123539963.png" alt="" className="redpack-img"/>
                    </div>
                </div>
                <div id='test'>
                    <div className='vip-title'>
                        <div className='title-box'>
                            <div className='main'>会员专享5折起</div>
                            <div className='sub'>精选全球美食 会员抢先购买</div>
                        </div>
                    </div>
                    <div>
                        <VipList></VipList>
                    </div>
                </div>
            </div>
        )
    }
}
