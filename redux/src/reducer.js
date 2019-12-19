import { combineReducers } from 'redux';

let data = (data =[], action) => {
  // console.log(action);
  switch(action.type) {
    case 'ADD':
      return [...data, {
        id: Date.now(),
        title: action.title,
        singer: action.singer,
        selected: false,
        like: false
      }];
      break;
    case 'REMOVE':
      return data.filter((item) => item.id !== action.id);
      break;
  }
  return data;
}

let reducer = combineReducers({
  data
});

export default reducer;