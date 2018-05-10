import axios from './index';

export function getSlider() {
    //获取轮播图的方法
   return axios.get('/slider');
}
export function getFruits(offset,limit) { //列表
    return axios.get(`/list?offset=${offset}&limit=${limit}`)
}
export function getFruitsDetail(id) { //详情
    return axios.get('/detail?id='+id)
}
export function getTrolley(id){ //购物车
    return axios.get('/shop?id='+id)
}