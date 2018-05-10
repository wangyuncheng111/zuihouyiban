import React,{Component} from 'react';
import './index.less'
import {connect} from "react-redux"
import actions from '../../store/actions/home'
import index from "../../store/reducers";
import {loadMore,pullRefresh} from '../../common/util';
class VipList extends Component{
    constructor(){
        super()
        this.content = React.createRef();
    }
    componentDidMount(){

        if (this.props.fruits.lists.length === 0){
            this.props.setFruitsList();
        }
        // 给context元素绑定scroll时间
        loadMore(this.content.current,this.loadMore);
        // 下拉刷新
        pullRefresh(this.content.current,this.props.refresh);
        console.log(this.content.current);
    }
    loadMore = () =>{
        this.props.setFruitsList();
        console.log(1);
    }
    render(){
        let lista=this.props.fruits.lists;
        return(
            <div ref={this.content}>
                {lista.length>0 ?
                    lista.map((item,index)=>(
                        <section className='product-item-container product-list-item' key={index}>
                            <div className='product-item'>
                                <div className='item-image'>
                                    <div className='promotion'>
                                        <div className='product-item-promotion'>
                                            <img src={item.imgS} alt="" className='vux-x-img b-loaded'/>
                                        </div>
                                    </div>
                                    <div className='product-item-image'>
                                        <img src={item.imgB} alt="" className='vux-x-img b-loaded'/>
                                    </div>
                                </div>
                                <div className='item-detail'>
                                    <div className='item-title'>
                                        <div className='product-item-title'>
                                            <p className='sub-title'>{item.title}</p>
                                            <p className='mess-title'>{item.describe}</p>
                                        </div>
                                    </div>
                                    <div className='item-tag'>
                                        <div className='product-item-tag'></div>
                                    </div>
                                    <div className='item-price'>
                                        <div className='product-item-price'>
                                            <span>{item.price}</span>
                                        </div>
                                    </div>
                                    <div className='item-cart'>
                                        <div className='product-item-cart'>
                                            <div className='cart'>
                                                <img src="https://j-image.missfresh.cn/img_20170425134548759.png" alt="" className='image'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )):null }
            </div>
        )
    }
}
export default connect(state => state.home, actions)(VipList)