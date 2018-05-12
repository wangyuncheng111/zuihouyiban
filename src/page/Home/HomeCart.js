import React from 'react';
import './index.less'
import {getTrolley} from "src/api/home";

export default class HomeCart extends React.Component {
    constructor(){
        super();
        this.shopping = React.createRef();
        this.gouwu = React.createRef();
        this.state = {
            number: 0
        };
    }

    handleClick = (e,index) => {
        e.preventDefault();
        console.log(this.shopping);
        this.setState({number:this.state.number+1})
        getTrolley(1);
        // console.log(this.shopping.current.style);
        // this.props.setCartCount(1)
        // console.log(this.state.number);
        // if (this.state.number > -1) {
        //     console.log(this);
        //     this.shopping.current.style.display = 'none';
        //     this.gouwu.current.style.display = 'block';
        // }

    };
    handleMinus = (e) => {
        e.preventDefault();
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
    handleAdd = (e) => {
        e.preventDefault();
        // this.props.setCartCount(1)
        this.setState({number: this.state.number + 1})
    };
    render() {
        return (
            <div ref={this.shopping}>
                {this.state.number>0?<div ref={this.gouwu} className="gouwu">
                    <button className="left-button" onClick={(e)=>this.handleMinus(e)}>-</button>
                    {Math.max(0, this.state.number)}
                    <button className="right-button" onClick={(e)=>this.handleAdd(e)}>+</button>
                </div>:<i  className="iconfont icon-gouwuche icon"
                           onClick={(e)=>this.handleClick(e)}></i>}


            </div>
        )
    }
}


