import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { createStore, applyMiddleware } from '../kRedux'
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

// const store = createStore(countReducer, applyMiddleware(thunk, logger))
// combineReducers 方式，会把getState转成一个对象，默认就是一个值
const store = createStore(
  combineReducers({
    count: countReducer
  })
)

export default store

// middlewares中间件通过middleApi封装的，所以它有getState, dispatch方法
function logger({ getState, dispatch }) {
  // action是外部传进来的参数，如{type: 'ADD'}
  return dispatch => action => {
    console.log(action.type + '执行了') //sy-log
    return dispatch(action)
  }
}

function thunk({ getState, dispatch }) {
  return dispatch => action => {
    // action 可以是对象 还可以是函数 ，那不同的形式，操作也不同
    if (typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return dispatch(action)
    }
  }
}
