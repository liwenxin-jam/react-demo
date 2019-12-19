import {
  combineReducers
} from 'redux';

let data = (data = [{
    id: 1,
    title: '听妈妈的话',
    singer: '周杰伦',
    selected: false,
    like: false
  },
  {
    id: 2,
    title: '心墙',
    singer: '郭静',
    selected: true,
    like: false
  }
], action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD':
      return [...data, {
        id: Date.now(),
        title: action.title,
        singer: action.singer,
        selected: false,
        like: false
      }];
    case 'REMOVE':
      return data.filter((item) => item.id !== action.id);
    case 'CHECK_ALL':
      return data.map((item) => {
        item.selected = action.checked;
        return Object.assign({}, item);
      })
    case 'CHECK':
      return data.map((item) => {
        if (item.id === action.id) {
          item.selected = action.checked;
          return Object.assign({}, item);
        }
        return item;
      })
    case 'CHECK_LIKE':
      return data.map((item) => {
        if (item.id === action.id) {
          item.like = action.checked;
          return Object.assign({}, item);
        }
        return item;
      })
    case 'REMOVE_SELECTED':
      return data.filter((item) => !item.selected);
    case 'LIKE_SELECTED':
      return data.map((item) => {
        if (item.selected) {
          item.like = true;
          return Object.assign({}, item);
        }
        return item;
      });
    case 'CANCEL_LIKE_SELECTED':
      return data.map((item) => {
        if (item.selected) {
          item.like = false;
          return Object.assign({}, item);
        }
        return item;
      });
    default:
  }
  return data;
}

let reducer = combineReducers({
  data
});

export default reducer;