import * as Types from '../action-types';
import {getSlider, getFruits, getFruitsDetail} from '../../api/home'

let actions = {
    setLesson(lesson) {
        return (dispath, getState) => {
            dispath({type: Types.SET_CURRENT_LESSON, lesson});
            actions.refresh()(dispath, getState)
        }
    },
    setSlider() {
        return (dispath) => {
            //用来改变loading状态的
            dispath({type: Types.SET_SLIDERS});
            //真正请求
            dispath({type: Types.SET_SLIDERS_SUCCESS, payload: getSlider()})
        }
    },
    refresh() {
        return (dispatch, getState) => {
            dispatch({type: Types.CLEAR_LESSON});
            actions.setFruitsList()(dispatch, getState)
        }
    },
    setFruitsList() {
        return ((dispatch, getState) => {
            let {fruits: {limit, offset}} = getState().home;
            // console.log(getState().home);
            dispatch({type: Types.SET_FRUITS});
            dispatch({type: Types.SET_FRUITS_SUCCESS, payload: getFruits(offset, limit)})
        })
    },
    setFruitsDetail(id) {
        return ((dispatch) => {
            dispatch({
                type: Types.DETAILS_FRUIT, payload: getFruitsDetail(id).then((val) => {
                    console.log(val, '数据');
                    return val
                })
            });
        })
    }


};
export default actions;