import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component {
  render() {
    let data = this.props.data;
    // console.log(this.props)
    return (
      <tr className={(data.selected ? "selected" : "") + (data.like ? " like" : "")}>
        <td>
          <input 
            type="checkbox" 
            checked={data.selected} 
            onChange={(e) => {
              this.props.dispatch({
                type: 'CHECK',
                id: data.id,
                checked: e.target.checked
              })
            }}
          />
        </td>
        <td>{data.title}</td>
        <td>{data.singer}</td>
        <td>
          <input 
            type="checkbox" 
            checked={data.like} 
            onChange={(e) => {
              this.props.dispatch({
                type: 'CHECK_LIKE',
                id: data.id,
                checked: e.target.checked
              })
            }}
          />
        </td>
        <td>
          <a 
            onClick={() => {
            this.props.dispatch({
              type: 'REMOVE',
              id: data.id
            })
          }}>X</a>
        </td>
      </tr>
    )
  }
}

export default connect((state, props) => {
  let data = {};
  state.data.forEach((item) => {
    // console.log(item)
    // console.log(props.data)
    if(item.id === props.data.id) {
      // data.data = Object.assign({}, item);  // 要么这里改变引用地址，要么是dispatch check的时候改
      data.data = item;
    }
  })
  return data;
})(Item);