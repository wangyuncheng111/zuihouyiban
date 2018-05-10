import * as Types from '../action-types';

let initState = {
    currentLesson: '0',
    slider: {
        loading: false,
        lists: []
    },
    lesson: {
        hasMore: true, // 默认有更多
        loading: false, //是否正在加载
        limit: 5, // 限制条数
        offset: 0,// 偏移量
        lists: [] // 所有的数据
    },
    fruits: {
        hasMore: true,
        limit: 5,
        offset: 0,
        loading: true,
        lists: [],
        check: true,
        detail:[]
    }
};
export default function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.lesson};
        case Types.SET_SLIDERS:
            return {...state, slider: {...state.slider, loading: true}};
        case Types.SET_SLIDERS_SUCCESS:
            return {...state, slider: {lists: action.payload, loading: false}};
        case Types.SET_FRUITS:
            return {...state, fruits: {...state.fruits, loading: true}};

        case Types.SET_FRUITS_SUCCESS:
            return {
                ...state,
            fruits: {
        ...state.fruits,
                loading: false,
                hasMore: action.payload.hasMore,
                lists: action.payload.fruits
        }
    };
        case Types.DETAILS_FRUIT:
            console.log(action.payload,'asd');
            return {...state,fruits:{...state.fruits,detail:action.payload[0]}};

        case Types.CLEAR_LESSON:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    loading: false,
                    hasMore: true,
                    offset: 0,
                    lists: []
                }
            }
    }
    return state;
}
// return {...state, fruits:{ ...state.fruits, loading: false}};