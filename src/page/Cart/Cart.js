import React from 'react';
import './index.less';
export default class Cart extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='cart'>
                <div className='cart-item'>
                    <img className='cart-img' src="https://static-as.missfresh.cn/frontend/img/icon_buycar_empty_icon.png" alt=""/>
                    <span className='cart-text'>您还没有添加任何商品</span>
                </div>
            </div>
        )
    }
}


